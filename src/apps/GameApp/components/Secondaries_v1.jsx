import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DeleteIcon from "@material-ui/icons/Delete";

import { useGameContext } from "../contexts/GameContext";
import { SECONDARY_CATEGORIES } from "../data/common";
import MISSIONS from "../data/missions";
import SECONDARIES from "../data/secondaries";

const Secondaries = ({ idx, next }) => {
  const { gameState, setGameState } = useGameContext();

  const player = gameState.players[idx];

  const [selectedSecondary, setSelectedSecondary] = useState();

  const selectedCategories = player.secondaries?.map((s) => s.category) ?? [];
  const availableCategories = Object.values(SECONDARY_CATEGORIES).filter(
    (s) => !selectedCategories.includes(s)
  );
  const allSecondaries = [
    ...SECONDARIES,
    ...MISSIONS.find((m) => m.name === gameState.mission).secondary_objectives,
  ];
  const availableSecondaries = availableCategories
    .map((c) => allSecondaries.filter((s) => s.category === c))
    .filter((group) => group.length > 0);

  const onSave = () => {
    next();
  };

  const playerName = player.name || `Player ${idx + 1}`;

  const onSelectSecondary = () => {
    if (selectedSecondary) {
      setGameState((prev) => {
        const updated = { ...prev };
        updated.players[idx] = {
          ...player,
          secondaries: [...(player.secondaries ?? []), selectedSecondary],
        };
        return updated;
      });
      setSelectedSecondary(null);
    }
  };

  const onDeleteSecondary = (i) => {
    setGameState((prev) => {
      const updated = { ...prev };
      updated.players[idx] = {
        ...player,
        secondaries: player.secondaries.filter((_, index) => i !== index),
      };
      return updated;
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <h1>{`Secondaries - ${playerName}`}</h1>
      {player.secondaries?.map((s, i) => (
        <Box key={s.name} paddingBottom={2} borderBottom="1px solid darkGrey">
          <h3>
            {i + 1}. {s.name}
            <IconButton
              aria-label="delete"
              onClick={() => onDeleteSecondary(i)}
            >
              <DeleteIcon />
            </IconButton>
          </h3>
          <h4>{s.type}</h4>
          <Box>{s.description}</Box>
        </Box>
      ))}
      {player.secondaries?.length === 3 ? (
        <Button variant="contained" color="primary" onClick={onSave}>
          Continue
        </Button>
      ) : (
        <>
          <FormControl variant="filled">
            <InputLabel id="faction">Secondary</InputLabel>
            <Select
              labelId="secondary"
              value={selectedSecondary?.name ?? ""}
              onChange={(event) =>
                setSelectedSecondary(
                  allSecondaries.find((s) => s.name === event.target.value)
                )
              }
            >
              <MenuItem key={"none"} value=""></MenuItem>
              {availableSecondaries.map((group) => [
                <ListSubheader>{group[0].category}</ListSubheader>,
                ...group.map((s) => (
                  <MenuItem key={s.name} value={s.name}>
                    {s.name}
                  </MenuItem>
                )),
              ])}
            </Select>
          </FormControl>
          {selectedSecondary ? (
            <>
              <h4>{selectedSecondary.type}</h4>
              <Box>{selectedSecondary.description}</Box>
              <Button
                variant="contained"
                color="primary"
                onClick={onSelectSecondary}
              >
                Select Secondary
              </Button>
            </>
          ) : null}
        </>
      )}
    </Box>
  );
};

export default Secondaries;
