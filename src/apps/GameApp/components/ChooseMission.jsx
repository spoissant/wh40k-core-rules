import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { useGameContext } from "../contexts/GameContext";
import { BATTLE_SIZES, GAME_MODES } from "../data/common";
import MISSIONS from "../data/missions";
import Objective from "./Objective";

// 1. Select Battle Size
// 2. Muster Armies
// 3. Determine Mission
// 4. Read Mission Briefing
const ChooseMission = ({ next }) => {
  const { gameState, setGameState } = useGameContext();

  const [mode, setMode] = useState(gameState.mode);
  const [size, setSize] = useState(gameState.size);
  const [mission, setMission] = useState(
    MISSIONS.find((m) => m.name === gameState.mission)
  );

  const onSave = () => {
    const cp = BATTLE_SIZES[size].CP;
    const cps = [cp, cp];
    setGameState((prev) => ({
      ...prev,
      mode,
      size,
      cps,
      mission: mission.name,
    }));

    next();
  };

  return (
    <Box display="flex" flexDirection="column">
      <h1>Choose Mission</h1>
      <FormControl variant="filled">
        <InputLabel id="mode">Game Mode</InputLabel>
        <Select
          labelId="mode"
          value={mode}
          onChange={(event) => {
            setMode(event.target.value);
            setSize(null);
            setMission(null);
          }}
        >
          {Object.values(GAME_MODES).map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="size">Battle Size</InputLabel>
        <Select
          labelId="size"
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
            setMission(null);
          }}
        >
          {Object.keys(BATTLE_SIZES).map((key) => (
            <MenuItem key={key} value={key}>
              {BATTLE_SIZES[key].name} - {BATTLE_SIZES[key].pts}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="mission">Mission</InputLabel>
        <Select
          labelId="mission"
          value={mission?.name ?? ""}
          onChange={(event) =>
            setMission(MISSIONS.find((m) => m.name === event.target.value))
          }
        >
          {MISSIONS.filter((m) => m.mode === mode && m.size === size).map(
            (m) => (
              <MenuItem key={m.name} value={m.name}>
                {m.source} - {m.name}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      {mission && (
        <Box>
          <h2>Briefing</h2>
          <Box>{mission.briefing}</Box>
          <h2>Primary Objectives</h2>
          {mission.primary_objectives.map((o) => (
            <Objective key={o.name} objective={o} />
          ))}
          <h2>Deployment</h2>
          <img
            alt="deployment"
            src={`${process.env.PUBLIC_URL}/missions/deployments/${mission.deployment}`}
            style={{ width: "100%" }}
          />
        </Box>
      )}
      {mission && (
        <>
          <h2>7. Determine Attacker and Defender</h2>
          <Box>
            The players roll off and the winner decides who will be the Attacker
            and who will be the Defender.
          </Box>
          <h2>8. Choose Deployment Zone</h2>
          <Box>
            The Defender now selects one of the deployment zones for their army.
            Their opponent uses the other deployment zone.
          </Box>
        </>
      )}
      {mission && (
        <Button variant="contained" color="primary" onClick={onSave}>
          Continue to secondaries
        </Button>
      )}
    </Box>
  );
};

export default ChooseMission;
