import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import { useGameContext } from "./contexts/GameContext";
import ChooseMission from "./components/ChooseMission";
import GameSetup from "./components/GameSetup";
import MakeWar from "./components/MakeWar";
import PlayerSetup from "./components/PlayerSetup";
import Secondaries from "./components/Secondaries";

// STEPS
// Name Players
// Choose Game Type
// Choose Secondaries
// Setup Game Board
// Play Game!

// GAME
// Size (Enum)
// Pts
// Type (Matched, Crusade, Open)
// Current Round
// Current Phase?
// Current Player?

// === PLAYER ===
// Name
// Faction (s?)
// CPs
// Won First Turn Roll
// Took First Turn
// Primary Objectives points (array, per round?)
// Secondary Objectives (array of 3)
// - Name
// - Points
// Fully Painted

// NICE TO HAVE
// Default Player

const GameApp = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { resetGameState } = useGameContext();

  const steps = [
    "player1",
    "player2",
    "choose-mission",
    "secondaries_player1",
    "secondaries_player2",
    "game-setup",
    "make-war",
  ];

  const next = () => {
    const current = location.pathname.replace(`${match.path}/`, "");
    const nextIndex = steps.findIndex((val) => val === current) + 1;
    const next = steps[nextIndex];
    history.push(`/game/${next}`);
  };

  const reset = () => {
    resetGameState();
    history.push(`/game/${steps[0]}`);
  };

  return (
    <Container maxWidth="sm">
      <Box mb={8}>
        <Switch style={{ flex: 1 }}>
          <Route key="player1" path={`${match.path}/player1`}>
            <PlayerSetup idx={0} next={next} />
          </Route>
          <Route key="player2" path={`${match.path}/player2`}>
            <PlayerSetup idx={1} next={next} />
          </Route>
          <Route key="choose-mission" path={`${match.path}/choose-mission`}>
            <ChooseMission next={next} />
          </Route>
          <Route
            key="secondaries_player1"
            path={`${match.path}/secondaries_player1`}
          >
            <Secondaries idx={0} next={next} />
          </Route>
          <Route
            key="secondaries_player2"
            path={`${match.path}/secondaries_player2`}
          >
            <Secondaries idx={1} next={next} />
          </Route>
          <Route key="game-setup" path={`${match.path}/game-setup`}>
            <GameSetup next={next} />
          </Route>
          <Route key="make-war" path={`${match.path}/make-war`}>
            <MakeWar />
          </Route>
          <Route exact path={match.path}>
            <Redirect to={`/game/${steps[0]}`} />
          </Route>
        </Switch>
      </Box>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        display="flex"
        justifyContent="center"
      >
        <Button variant="contained" color="secondary" onClick={reset}>
          RESET
        </Button>
      </Box>
    </Container>
  );
};

export default GameApp;
