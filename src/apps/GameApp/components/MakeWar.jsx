import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { sumScore } from "../utils";
import { useGameContext } from "../contexts/GameContext";

import PlayerScore from "./PlayerScore";

const MakeWar = ({ next }) => {
  const { gameState } = useGameContext();

  const [drawersState, setDrawersState] = useState({
    player1: false,
    player2: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawersState((prev) => ({ ...prev, [anchor]: open }));
  };

  return (
    <Box display="flex" flexDirection="column">
      <h1>Make WAR!</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer("player1", true)}
      >
        {gameState.players[0].name || "Player 1"} -{" "}
        {sumScore(gameState.scores[0])} pts
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer("player2", true)}
      >
        {gameState.players[1].name || "Player 2"} -{" "}
        {sumScore(gameState.scores[1])} pts
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={drawersState.player1}
        onClose={toggleDrawer("player1", false)}
        onOpen={toggleDrawer("player1", true)}
      >
        <PlayerScore idx={0} />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="right"
        open={drawersState.player2}
        onClose={toggleDrawer("player2", false)}
        onOpen={toggleDrawer("player2", true)}
      >
        <PlayerScore idx={1} />
      </SwipeableDrawer>
    </Box>
  );
};

export default MakeWar;
