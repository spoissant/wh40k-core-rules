import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useGameContext } from "../contexts/GameContext";
import { SECONDARY_CATEGORIES } from "../data/common";
import SECONDARIES from "../data/secondaries";
import Objective from "./Objective";

const Secondaries = ({ idx, next }) => {
  const { gameState, setGameState } = useGameContext();

  const player = gameState.players[idx];

  const selectedCategories = player.secondaries?.map((s) => s.category) ?? [];
  // const availableCategories = Object.values(SECONDARY_CATEGORIES).filter(
  //   (s) => !selectedCategories.includes(s)
  // );
  const allSecondaries = [...SECONDARIES];
  const availableSecondaries = Object.values(SECONDARY_CATEGORIES)
    .map((c) => allSecondaries.filter((s) => s.category === c))
    .filter((group) => group.length > 0);

  const playerName = player.name || `Player ${idx + 1}`;

  const playerSelected = (value) =>
    player.secondaries?.some((s) => s.name === value.name);

  const selectSecondary = (value) => {
    if (selectedCategories.includes(value.category)) {
      return;
    }

    if (player.secondaries?.length === 3) {
      return;
    }

    setGameState((prev) => {
      const updated = { ...prev };
      updated.players[idx] = {
        ...player,
        secondaries: [...(updated.players[idx].secondaries ?? []), value],
      };
      return updated;
    });
  };

  const unselectSecondary = (value) => {
    setGameState((prev) => {
      const updated = { ...prev };
      updated.players[idx] = {
        ...player,
        secondaries: updated.players[idx].secondaries.filter(
          (s) => s.name !== value.name
        ),
      };
      return updated;
    });
  };

  const toggleSecondary = (value) => {
    if (playerSelected(value)) {
      unselectSecondary(value);
    } else {
      selectSecondary(value);
    }
  };

  if (player.secondaries?.length === 3) {
    return (
      <Box display="flex" flexDirection="column">
        {player.secondaries.map((s) => (
          <Box key={s.category}>
            <h2>{s.category}</h2>
            <Box
              onClick={() => toggleSecondary(s)}
              style={{ background: playerSelected(s) ? "red" : "default" }}
            >
              <Objective objective={s} />
            </Box>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={next}>
          Continue
        </Button>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column">
      <h1>{`Secondaries - ${playerName}`}</h1>
      {availableSecondaries.map((group) => [
        <h2
          key={`${group[0].category}-${selectedCategories.includes(
            group[0].category
          )}`}
          style={{
            color: selectedCategories.includes(group[0].category)
              ? "#ccc"
              : "default",
          }}
        >
          {group[0].category}
        </h2>,
        ...group.map((s) => (
          <Box
            key={`${s.name}-${playerSelected(s)}-${selectedCategories.includes(
              group[0].category
            )}`}
            onClick={() => toggleSecondary(s)}
            style={{
              cursor:
                selectedCategories.includes(group[0].category) &&
                !playerSelected(s)
                  ? "inherit"
                  : "pointer",
              background: playerSelected(s) ? "red" : "default",
              color:
                selectedCategories.includes(group[0].category) &&
                !playerSelected(s)
                  ? "#ccc"
                  : "default",
            }}
          >
            <h3>{s.name}</h3>
            <Typography variant="subtitle1">{s.type}</Typography>
            <Box dangerouslySetInnerHTML={{ __html: s.description }}></Box>
          </Box>
        )),
      ])}
    </Box>
  );
};

export default Secondaries;
