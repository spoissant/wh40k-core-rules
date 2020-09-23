import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import { useGameContext } from "../contexts/GameContext";

const primaryObjectivesMarks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
];

const PlayerScore = ({ idx }) => {
  const { gameState, setGameState } = useGameContext();

  const { primaryScores, setPrimaryScores } = useState([0, 0, 0, 0]);
  const { secondaryScores, setSecondaryScores } = useState([0, 0, 0]);

  const player = gameState.players[idx];

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={window.innerWidth > 1000 ? 1000 : window.innerWidth}
    >
      <h1>{player.name || `Player ${idx + 1}`}</h1>
      <h2>Primary Objectives</h2>
      {Array.from({ length: 4 }, (_, k) => k + 2).map((i) => (
        <Box display="flex" alignItems="center" key={i}>
          <Typography>Turn {i}</Typography>
          <Box p={4} flex={1}>
            <Slider
              max={15}
              defaultValue={0}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="off"
              marks={primaryObjectivesMarks}
            />
          </Box>
        </Box>
      ))}
      <h2>Secondary Objectives</h2>
      {player.secondaries.map((s) => (
        <Box p={4} display="flex" flexDirection="column" key={s.name}>
          <h3>{s.name}</h3>
          <Typography variant="subtitle1">{s.type}</Typography>
          <Box>{s.description}</Box>
          <Slider
            max={s.points[s.points.length - 1]}
            defaultValue={s.points[0]}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="off"
            marks={s.points.map((p) => ({ value: p, label: `${p}` }))}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PlayerScore;
