import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import { useGameContext } from "../contexts/GameContext";

const PlayerSetup = ({ idx, next }) => {
  const { gameState, setGameState } = useGameContext();

  const player = gameState.players[idx];

  const [name, setName] = useState(player.name);
  const [faction, setFaction] = useState(player.faction);

  const onSave = () => {
    setGameState((prev) => {
      const updated = { ...prev };
      updated.players[idx] = {
        name: name,
        faction,
      };
      return updated;
    });

    next();
  };

  const factions = ["Space Marines", "Tyranids"];

  return (
    <Box display="flex" flexDirection="column">
      <h1>{`Player ${idx + 1}`}</h1>
      <TextField
        variant="filled"
        label="Name (optional)"
        placeholder={`Player ${idx + 1}`}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <FormControl variant="filled">
        <InputLabel id="faction">Faction</InputLabel>
        <Select
          labelId="faction"
          value={faction}
          onChange={(event) => setFaction(event.target.value)}
        >
          {factions.map((f) => (
            <MenuItem key={f} value={f}>
              {f}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {faction ? (
        <Button variant="contained" color="primary" onClick={onSave}>
          Continue
        </Button>
      ) : null}
    </Box>
  );
};

export default PlayerSetup;
