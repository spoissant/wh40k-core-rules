import React from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import { useGameContext } from "../contexts/GameContext";
import MISSIONS from "../data/missions";
import Objective from "./Objective";

import { sumScore } from "../utils";

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

  const player = gameState.players[idx];
  const score = gameState.scores[idx];
  const cps = gameState.cps[idx];
  const mission = MISSIONS.find((m) => m.name === gameState.mission);
  const total = sumScore(score);

  const setCps = (val) =>
    setGameState((prev) => {
      const updated = { ...prev };
      updated.cps[idx] = val;
      return updated;
    });

  const setPrimary = (i, val) =>
    setGameState((prev) => {
      const updated = { ...prev };
      updated.scores[idx].primaries[i] = val;
      return updated;
    });

  const setSecondary = (i, val) =>
    setGameState((prev) => {
      const updated = { ...prev };
      updated.scores[idx].secondaries[i] = val;
      return updated;
    });

  return (
    <Box
      display="flex"
      flexDirection="column"
      boxSizing="border-box"
      p={6}
      width={window.innerWidth > 1000 ? 1000 : window.innerWidth}
    >
      <h1>
        {player.name || `Player ${idx + 1}`} - {total} pts
      </h1>
      <h2>CPs</h2>
      <Slider
        max={20}
        defaultValue={0}
        value={cps}
        onChange={(ev, val) => setCps(val)}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="on"
      />
      <h2>Primary Objectives</h2>
      {mission.primary_objectives.map((o) => (
        <Objective objective={o} />
      ))}
      {Array.from({ length: 4 }, (_, k) => k + 2).map((turn, i) => (
        <Box display="flex" flexDirection="column">
          <Typography>Turn {turn}</Typography>
          <Slider
            max={15}
            defaultValue={0}
            value={score.primaries[i]}
            onChange={(ev, val) => setPrimary(i, val)}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="off"
            marks={primaryObjectivesMarks}
          />
        </Box>
      ))}
      <h2>Secondary Objectives</h2>
      {player.secondaries.map((s, i) => (
        <Box display="flex" flexDirection="column" key={s.name}>
          <Objective objective={s} />
          <Slider
            max={s.points[s.points.length - 1]}
            defaultValue={s.points[0]}
            value={score.secondaries[i]}
            onChange={(ev, val) => setSecondary(i, val)}
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
