// Goal of this file is to take in a WH40k FAQ as raw text (select all, copy, paste from PDF) and convert it
// to wh40k-core-rules nodes so they can be used to search for content in the app.
// Navigate to ./tools and run `node faq`
const fs = require("fs");
const path = require("path");

const root = path.posix.dirname(
  process.argv[1].split(path.sep).join(path.posix.sep)
);

const TYRANIDS = "tyranids"
const BLOOD_ANGELS = "blood_angels"
const NECRONS = "necrons"
const THOUSAND_SONS = "thousand_sons"
const DARK_ANGELS = "dark_angels"
const GREY_KNIGHTS = "grey_knights"
const TAU = "tau"
const GENESTEALER_CULT = "genestealer_cult"
const ASTRA_MILITARUM = "astra_militarum"

// File to tags
const fileNameToTags = {
  blood_of_baal: [TYRANIDS, BLOOD_ANGELS],
  necrons: [NECRONS],
  ritual_of_the_damned: [THOUSAND_SONS, DARK_ANGELS, GREY_KNIGHTS],
  tau: [TAU],
  the_greater_good: [TAU, GENESTEALER_CULT, ASTRA_MILITARUM],
  thousand_sons: [THOUSAND_SONS],
  tyranids: [TYRANIDS],
};

const startRegex = /^(\*?Page)|(Q:)/;
const errataRegex = /^\*?Page/;
const questionRegex = /^Q:/;
const childrenStartRegex = /^((•|\):|to:|following:|’:|ability:|read:|A: )|(Change (this|the|to))|(Delete this))/;
const footerRegex = /WARHAMMER 40,000/;
const childrenEndRegex = /\.$/;
const versionRegex = /Version /;

fs.readdir(`${root}/faq`, function (err, items) {
  items.forEach((item) => {
    let version = null;
    const text = fs.readFileSync(`${root}/faq/${item}`).toString("utf-8");

    const lines = text.split("\n");

    let results = [];
    let parent = null;
    let children = null;
    let isQuestion = false;
    lines.forEach((line, idx) => {
      line = line.trim('/r');
      if (!version && (idx === 2 || idx === 3) && versionRegex.test(line)) {
        version = line;
      }
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
      } else if (parent && (childrenEndRegex.test(line) && !isQuestion)) {
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
      text: `${name.replace(/_/gi, " ")} FAQ - ${version}`,
      level: 2,
      tags: ["faq", ...fileNameToTags[name]],
      children: results,
    };

    // Write to output
    fs.writeFileSync(
      `${root}/../src/apps/RulesApp/data/${name}.json`,
      JSON.stringify(faq)
    );
  });
});
