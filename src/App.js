import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { GameContextProvider } from "./contexts/GameContext";

import RulesApp from "./apps/RulesApp";
import GameApp from "./apps/GameApp";

export default function App() {
  return (
    <Router basename={process.env.REACT_APP_BASEPATH}>
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
          <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box m={4}>
                <Link to="/game">
                  <Button variant="contained" color="primary">
                    Game
                  </Button>
                </Link>
              </Box>
              <Box m={4}>
                <Link to="/rules">
                  <Button variant="contained" color="primary">
                    Rules
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}
