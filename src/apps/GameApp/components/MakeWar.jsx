import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import PlayerScore from "./PlayerScore";

const MakeWar = ({ next }) => {
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
        Player 1
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer("player2", true)}
      >
        Player 2
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
