import React from 'react';
import './App.css';
import marked from 'marked'

import coreRules from './data/core-rules'

function App() {
  return (
    <div className="App">
      {coreRules.children.map((c, i) => <Title key={i} node={c} level={1} />)}
    </div>
  );
}

export default App;

const Rules = ({ nodes }) => (
  <ul>
    {nodes.map((node, idx) => (
      <li key={idx} dangerouslySetInnerHTML={{__html: marked(node.text)}}></li>
    ))}
  </ul>
)

const Title = ({ node, level }) => {
  let title = null
  if (level === 1) {
    title = <h1 dangerouslySetInnerHTML={{__html: marked(node.text)}}></h1>
  }
  if (level === 2) {
    title = <h2 dangerouslySetInnerHTML={{__html: marked(node.text)}}></h2>
  }
  if (level === 3) {
    title = <h3 dangerouslySetInnerHTML={{__html: marked(node.text)}}></h3>
  }
  if (level === 4) {
    title = <h4 dangerouslySetInnerHTML={{__html: marked(node.text)}}></h4>
  }
  if (level === 5) {
    title = <h5 dangerouslySetInnerHTML={{__html: marked(node.text)}}></h5>
  }
  if (level >= 6) {
    title = <h6 dangerouslySetInnerHTML={{__html: marked(node.text)}}></h6>
  }

  let children = null
  if(node.children.every(c => c.children.length === 0)) {
    children = <Rules nodes={node.children} />
  } else {
    children = node.children.map((c, i) => <Title key={i} node={c} level={level+1} />)
  }

  return (
    <>
      {title}
      {children}
    </>
  )
}