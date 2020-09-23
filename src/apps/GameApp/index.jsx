import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
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
  const { gameState, setGameState, resetGameState } = useGameContext();

  const steps = [
    "player1",
    "player2",
    "choose-mission",
    "secondaries_player1",
    "secondaries_player2",
    "game-setup",
    "make-war",
  ];

  useEffect(() => {
    const step = gameState?.step ?? 0;
    history.replace(`${match.path}/${steps[step]}`);
  }, []);

  useEffect(() => {
    console.log(location.pathname);
    let step = steps.indexOf(location.pathname.replace("/game/", ""));
    step = step === -1 ? 0 : step;
    if (gameState.step !== step) {
      setGameState((prev) => ({ ...prev, step }));
    }
  }, [match, setGameState, steps]);

  const next = () => {
    const step = gameState.step ?? 0;
    history.push(`/game/${steps[step + 1]}`);
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
