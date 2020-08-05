// Goal of this file is to take in a WH40k FAQ as raw text (select all, copy, paste from PDF) and convert it
// to wh40k-core-rules nodes so they can be used to search for content in the app.
const fs = require("fs");
const path = require("path");

const root = path.posix.dirname(process.argv[1]);

const startRegex = /^(\*?Page)|(Q:)/;
const errataRegex = /^\*?Page/;
const questionRegex = /^Q:/;
const childrenStartRegex = /(\):|to:|following:|’:|ability:|read:|A: )/;
const footerRegex = /WARHAMMER 40,000/;
const childrenEndRegex = /\.$/;

fs.readdir(`${root}/faq`, function (err, items) {
  items.forEach((item) => {
    const text = fs.readFileSync(`${root}/faq/${item}`).toString("utf-8");

    const lines = text.split("\n");

    let results = [];
    let parent = null;
    let children = null;
    let isQuestion = false;
    lines.forEach((line) => {
      if (footerRegex.test(line)) {
        // Do nothing
      } else if (startRegex.test(line)) {
        if (parent) {
          results.push(parent);
        }

        const tags = [];
        if (errataRegex.test(line)) {
          tags.push("errata");
          isQuestion = false;
        }
        if (questionRegex.test(line)) {
          tags.push("question");
          isQuestion = true;
        }

        parent = {
          text: line,
          level: 5,
          tags: tags,
          children: [],
        };
        // Arbitrary threshold
        children =
          line.length > 50
            ? null
            : {
                text: "",
                tags: [],
                children: [],
              };
        if (children) {
          parent.children.push(children);
        }
      } else if (parent && childrenStartRegex.test(line)) {
        if (children && children.text === "") {
          children.text += ` ${line}`;
        } else {
          children = {
            text: `${line}`,
            tags: [],
            children: [],
          };
          parent.children.push(children);
        }
      } else if (parent && childrenEndRegex.test(line) && !isQuestion) {
        if (children) {
          children.text += ` ${line}`;
          children = null;
        } else {
          parent.children.push({
            text: line,
            tags: [],
            children: [],
          });
        }
      } else if (children) {
        children.text += ` ${line}`;
      } else if (parent) {
        if (parent.children.length > 0) {
          children = {
            text: `${line}`,
            tags: [],
            children: [],
          };
          parent.children.push(children);
        } else {
          parent.text += ` ${line}`;
        }
      }
    });

    if (parent) {
      results.push(parent);
    }

    const name = path.basename(item, ".txt");

    const faq = {
      text: `${name.replace(/_/gi, " ")} FAQ`,
      tags: ["faq"],
      children: results,
    };

    // Write to output
    fs.writeFileSync(`${root}/../src/data/${name}.json`, JSON.stringify(faq));
  });
});
