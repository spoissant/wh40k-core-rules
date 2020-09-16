import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GameContextProvider } from "./contexts/GameContext";

import RulesApp from "./apps/RulesApp";
import GameApp from "./apps/GameApp";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game">
            <GameContextProvider>
              <GameApp />
            </GameContextProvider>
          </Route>
          <Route path="/rules">
            <RulesApp />
          </Route>
          <Route path="/">
            <div>
              <Link to="/game">Game</Link>
            </div>
            <div>
              <Link to="/rules">Rules</Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
