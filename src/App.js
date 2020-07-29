import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import ReactGA from 'react-ga';

import styled from "styled-components";
import coreRules from "./data/core-rules";
import { Waypoint } from "react-waypoint";

import useDebounce from './utils/utils'

ReactGA.initialize('UA-173899337-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const applyFilter = (node, filter, parentMatches) => {
  const text = ReactDOMServer.renderToString(node.text)
  const match = parentMatches || text.toLowerCase().includes(filter.query)
  const children = node.children.map(c => applyFilter(c, filter, match)).filter(n => n)
  return (match || children.length > 0) ? { ...node, children: children } : null
}

function App() {
  const [filtered, setFiltered] = useState(coreRules)
  const [query, setQuery] = useState('')
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

  useEffect(() => {
    // I am displayed if I match OR if one of my children matches
    // If I match, all of my children are matched

    const filter = { query: query.toLowerCase() }
    setFiltered(applyFilter(coreRules, filter, false))

  }, [query])

  // const debouncedBreadcrumb = useDebounce(breadcrumb, 300);
  
  return (
    <div className="App">
      {/* <Header>{debouncedBreadcrumb.filter((item) => item).join(" > ")}</Header> */}
      <Header><SearchInput type='text' value={query} onChange={e => setQuery(e.target.value)} /></Header>
      <Container>
        {filtered ? filtered.children.map((c, i) => (
          <Node
            key={i}
            // updateBreadcrumb={updateBreadcrumb}
            node={c}
            level={1}
          />
        )) : (
          <h1>No matches found</h1>
        )}
      </Container>
    </div>
  );
}

export default App;

const Rules = ({ nodes }) => (
  <ul>
    {nodes.map((node, idx) => (
      <li key={idx}>{node.text}</li>
    ))}
  </ul>
);

const Node = ({ node, level, updateBreadcrumb }) => {
  const actualLevel = node.level ?? level;
  const advanced = node.tags.some((t) => t === "advanced");
  const Heading = styled[`h${actualLevel}`]``;
  const title = node.text ? (
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
  ) : null;

  let children = null;
  if (node.children.every((c) => c.children.length === 0 && !c.level)) {
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
  font-family: 'Roboto Condensed', sans-serif;
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
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 22px;
  padding: 2px 8px
`