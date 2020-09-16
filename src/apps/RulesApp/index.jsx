import React, { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import ReactDOMServer from "react-dom/server";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

import bloodOfBaalFaq from "../../data/blood_of_baal.json";
import coreRules from "../../data/core-rules";
import necronsFaq from "../../data/necrons.json";
import ritualOfTheDamnedFaq from "../../data/ritual_of_the_damned.json";
import tauFaq from "../../data/tau.json";
import theGreaterGoodFaq from "../../data/the_greater_good.json";
import thousandSonsFaq from "../../data/thousand_sons.json";
import tyranidsFaq from "../../data/tyranids.json";
import Menu from "./components/Menu";

const applyFilter = (node, filter, parentMatches) => {
  const text = ReactDOMServer.renderToString(node.text);

  // Query
  const queryMatch = text.toLowerCase().includes(filter.query);

  // Faction Filtering
  const filterMatch =
    !filter?.factions?.length ||
    node.tags.some((t) => filter.factions.includes(t));

  const match = parentMatches || (queryMatch && filterMatch);

  const children = node.children
    .map((c) => applyFilter(c, filter, match))
    .filter((n) => n);
  return match || children.length > 0 ? { ...node, children: children } : null;
};

const filterDebounceTime = 300;

const debouncedResetScroll = debounce(() => {
  window.scrollTo(0, 0);
}, filterDebounceTime);

const menu = [
  {
    id: "rules",
    label: "Rules",
    tags: [],
    subMenus: [
      { id: "core", label: "Core Rules", tags: ["core"] },
      { id: "main", label: "Other Rulebook Rules", tags: ["main"] },
    ],
  },
  {
    id: "spaceMarinesGroup",
    label: "Space Marines",
    tags: [],
    subMenus: [
      {
        id: "space_marines",
        label: "Space Marines",
        tags: ["space_marines"],
      },
      {
        id: "ultramarines",
        label: "Ultramarines",
        tags: ["ultramarines"],
      },
    ],
  },
  {
    id: "xenos",
    label: "Xenos",
    tags: [],
    subMenus: [
      {
        id: "tyranidsGroup",
        label: "Tyranids",
        tags: [],
        subMenus: [
          {
            id: "tyranids",
            label: "Tyranids",
            tags: ["tyranids"],
          },
          {
            id: "gsc",
            label: "Genestealer Cult",
            tags: ["genestealer_cult"],
          },
        ],
      },
      {
        id: "tau",
        label: "T'au Empire",
        tags: ["tau"],
      },
      {
        id: "necrons",
        label: "Necrons",
        tags: ["necrons"],
      },
    ],
  },
  {
    id: "armiesOfChaos",
    label: "Armies of Chaos",
    tags: [],
    subMenus: [
      {
        id: "ts",
        label: "Thousand Sons",
        tags: ["thousand_sons"],
      },
    ],
  },
];

const menuToFactions = (menus) =>
  menus
    .map(({ selected, subMenus, tags }) => [
      ...(selected ? tags : []),
      ...(subMenus ? menuToFactions(subMenus) : []),
    ])
    .flat();

const RulesApp = () => {
  const dataSource = useMemo(
    () => ({
      text: null,
      tags: [],
      children: [
        coreRules,
        tyranidsFaq,
        bloodOfBaalFaq,
        tauFaq,
        theGreaterGoodFaq,
        thousandSonsFaq,
        ritualOfTheDamnedFaq,
        necronsFaq,
      ],
    }),
    []
  );
  const [factions, setFactions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // const dataSource = tyranidsFaq
  const [filtered, setFiltered] = useState(dataSource);
  const [query, setQuery] = useState("");
  // const [breadcrumb, setBreadcrumb] = useState(["", "", "", "", "", ""]);
  // const updateBreadcrumb = ({ level, text }) => {
  //   if(level <= 3) {
  //     const idx = level - 1;
  //     setBreadcrumb((prev) => {
  //       const ret = [...prev];
  //       ret.fill("", idx);
  //       ret[idx] = text;
  //       return ret;
  //     });
  //   }
  // };

  const handleMenuClose = useCallback(() => setMenuOpen(false), []);

  const debouncedApplyFilter = useMemo(
    () =>
      debounce((query, factions) => {
        const filter = { query: query.toLowerCase(), factions };
        console.log("applyFilter - Factions", filter.factions);
        setFiltered(applyFilter(dataSource, filter, false));
      }, filterDebounceTime),
    [dataSource]
  );

  useEffect(() => {
    // I am displayed if I match OR if one of my children matches
    // If I match, all of my children are matched
    debouncedApplyFilter(query, factions);
    debouncedResetScroll();
  }, [query, factions, debouncedApplyFilter]);

  // const debouncedBreadcrumb = useDebounce(breadcrumb, 300);

  const handlMenuChange = useCallback(
    (menu) => setFactions(menuToFactions(menu)),
    []
  );

  return (
    <>
      {/* <Header>{debouncedBreadcrumb.filter((item) => item).join(" > ")}</Header> */}
      <Header>
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{ padding: "4px", cursor: "pointer" }}
        >
          <FaBars />
        </div>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Header>
      <Container>
        {filtered ? (
          filtered.children.map((c, i) => (
            <Node
              key={i}
              // updateBreadcrumb={updateBreadcrumb}
              node={c}
              level={1}
            />
          ))
        ) : (
          <h1>No matches found</h1>
        )}
      </Container>
      <MenuContainer>
        <Menu
          isOpen={menuOpen}
          menu={menu}
          onChange={handlMenuChange}
          onClose={handleMenuClose}
        />
      </MenuContainer>
    </>
  );
};

const Rules = ({ nodes }) => (
  <ul>
    {nodes.map((node, idx) => (
      <li key={idx}>{node.text}</li>
    ))}
  </ul>
);

const headings = {
  1: styled.h1``,
  2: styled.h2``,
  3: styled.h3``,
  4: styled.h4``,
  5: styled.h5``,
  6: styled.h6``,
};

const Node = ({ node, level, updateBreadcrumb }) => {
  const actualLevel = node.level ?? level;
  const advanced = node.tags.some((t) => t === "advanced");
  const table = node.tags.some((t) => t === "table");
  const Heading = headings[actualLevel];
  let title = null;

  if (node.text) {
    if (table) {
      title = node.text;
    } else {
      title = (
        <Heading className={advanced ? "advanced_title" : ""}>
          {/* <Waypoint
              topOffset='60px'
              onEnter={({ previousPosition, currentPosition }) => {
                if (previousPosition === Waypoint.above && currentPosition === Waypoint.inside) {
                  updateBreadcrumb({ text: '', level: actualLevel });
                }
              }}
              onLeave={({ previousPosition, currentPosition }) => {
                if (previousPosition === Waypoint.inside && currentPosition === Waypoint.above) {
                  updateBreadcrumb({ text: ReactDOMServer.renderToString(node.text), level: actualLevel });
                }
              }}
            /> */}
          {node.text}
        </Heading>
      );
    }
  }

  let children = null;
  if (table) {
  } else if (node.children.every((c) => c.children.length === 0 && !c.level)) {
    children = <Rules nodes={node.children} />;
  } else {
    children = node.children?.map((c, i) => (
      <Node
        key={i}
        node={c}
        level={actualLevel + 1}
        updateBreadcrumb={updateBreadcrumb}
      />
    ));
  }

  return (
    <>
      {title}
      <div className={advanced ? "advanced_rules" : ""}>{children}</div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 960px;
`;

const Header = styled.div`
  position: fixed;
  background: #979584;
  color: white;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 1000;
  padding: 8px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 22px;
  font-weight: 700;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 12px 2px rgba(0, 0, 0, 0.5);
`;

const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.2);
  font-family: "Roboto Condensed", sans-serif;
  font-size: 22px;
  padding: 2px 8px;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default RulesApp;
