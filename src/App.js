import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import GameApp from "./apps/GameApp";
import { GameContextProvider } from "./apps/GameApp/contexts/GameContext";
import RulesApp from "./apps/RulesApp";

export default function App() {
  return (
    <div className="App">
      <Router basename={process.env.REACT_APP_BASEPATH}>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game" basename="/game">
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
    </div>
  );
}
