import React, { useEffect, useLayoutEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

import { useGameContext } from "../../contexts/GameContext";

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
  const history = useHistory();
  const { gameState } = useGameContext();

  useEffect(() => {
    const step = gameState?.step ?? "player1";
    history.replace(`${match.path}/${step}`);
  }, []);

  return (
    <Container maxWidth="sm">
      <Switch>
        <Route key="player1" path={`${match.path}/player1`}>
          <Player idx={0} nextPath="/game/player2" />
        </Route>
        <Route key="player2" path={`${match.path}/player2`}>
          <Player idx={1} nextPath="/game/choose-mission" />
        </Route>
        <Route key="choose-mission" path={`${match.path}/choose-mission`}>
          <ChooseMission />
        </Route>
        <Route
          key="create-battlefield"
          path={`${match.path}/create-battlefield`}
        >
          5. Place Objective Markers 6. Create the Battlefield
        </Route>
        <Route key="secondaries" path={`${match.path}/secondaries`}>
          7. Select Secondaries
        </Route>
        <Route key="game-setup" path={`${match.path}/game-setup`}>
          8. Determine Attacker and Defender 9. Choose Deployment Zone 10.
          Declare Reserves and Transports 11. Deploy Armies 12. Determine First
          Turn 13. Resolve pre-battle abilities
        </Route>
        <Route key="make-war" path={`${match.path}/make-war`}>
          Play!
        </Route>
      </Switch>
    </Container>
  );
};

const Player = ({ idx, nextPath }) => {
  const history = useHistory();
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

    history.push(nextPath);
  };

  const factions = ["Space Marines", "Tyranids"];

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        id="filled-basic"
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

const SECONDARY_CATEGORIES = {
  PURGE_THE_ENNEMY: "Purge the Ennemy",
  NO_MERCY_NO_RESPITE: "No Mercy, No Respite",
  BATTLEFIELD_SUPREMACY: "Battlefield Supremacy",
  SHADOW_OPERATIONS: "Shadow Operations",
  WARPCRAFT: "Warpcraft",
  MISSION_SPECIFIC: "Mission Specific",
};

const BATTLE_SIZES = {
  COMBAT_PATROL: {
    name: "Combat Patrol",
    pts: 500,
    CP: 3,
  },
  INCURSION: {
    name: "Incusrion",
    pts: 1000,
    CP: 6,
  },
  STRIKE_FORCE: {
    name: "Strike Force",
    pts: 2000,
    CP: 12,
  },
  ONSLAUGHT: {
    name: "Onslaught",
    pts: 3000,
    CP: 18,
  },
};

const GAME_MODES = {
  MATCHED_PLAY: {
    name: "Matched Play",
    missions: [
      {
        size: "COMBAT_PATROL",
        name: "Incisive Attack",
        source: "core",
        briefing:
          "Two forces have dug in and fought to a stalemate. Adopting a new approach to the war, opportunistic bands of warriors now venture forth into no man’ land to seize vital ground and defeat the enemy with surgical assaults across the front.",
        rules: [
          {
            name: "Sweep and Clear",
            description:
              "In this mission, if you control an objective marker at the end of your Command phase, it remains under your control, even if you have no models within range of it, unless your opponent controls it at the end of any subsequent phase.",
          },
        ],
        primary_objectives: [
          {
            name: "Take and Hold",
            type: "Progressive",
            description: (
              <>
                At the end of each player’s Command phase, the player whose turn
                it is scores 5 victory points for each of the following
                conditions they satisfy (for a maximum of 15 victory points):
                <ul>
                  <li>They control one or more objective markers.</li>
                  <li>hey control two or more objective markers.</li>
                  <li>
                    They control more objective markers than their opponent
                    controls.
                  </li>
                </ul>
              </>
            ),
          },
        ],
        secondary_objectives: [
          {
            name: "Surgical Assault",
            type: "Progressive",
            category: SECONDARY_CATEGORIES.MISSION_SPECIFIC,
            Description:
              "Score 5 victory points if you control the objective marker in your opponent’s deployment zone at the end of your turn.",
          },
        ],
        deployment: "incisive_attack.png",
      },
      {
        size: "COMBAT_PATROL",
        name: "Outriders",
        source: "core",
      },
      {
        size: "COMBAT_PATROL",
        name: "Encircle",
        source: "core",
      },
    ],
  },
  // CRUSADE: {
  //   name: 'Crusade'
  // },
  // OPEN_PLAY: {
  //   name: 'Open Play'
  // },
};

// 1. Select Battle Size
// 2. Muster Armies
// 3. Determine Mission
// 4. Read Mission Briefing
const ChooseMission = () => {
  const history = useHistory();
  const { gameState, setGameState } = useGameContext();

  const [mode, setMode] = useState(gameState.mode ?? "MATCHED_PLAY");
  const [size, setSize] = useState(gameState.size ?? "COMBAT_PATROL");
  const [mission, setMission] = useState(gameState.mission);

  const onSave = () => {
    setGameState((prev) => ({ ...prev, mode, size, mission }));

    history.push("game/secondaries");
  };

  return (
    <Box display="flex" flexDirection="column">
      <FormControl variant="filled">
        <InputLabel id="mode">Game Mode</InputLabel>
        <Select
          labelId="mode"
          value={mode}
          onChange={(event) => {
            setMode(event.target.value);
            setSize("COMBAT_PATROL");
            setMission(null);
          }}
        >
          {Object.keys(GAME_MODES).map((key) => (
            <MenuItem key={key} value={key}>
              {GAME_MODES[key].name}
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
            setMission(
              GAME_MODES[mode].missions.find(
                (m) => m.name === event.target.value
              )
            )
          }
        >
          {GAME_MODES[mode].missions
            .filter((m) => m.size === size)
            .map((m) => (
              <MenuItem key={m.name} value={m.name}>
                {m.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {mission && <Box>{mission.briefing}</Box>}
      {mission && (
        <Button variant="contained" color="primary" onClick={onSave}>
          Continue
        </Button>
      )}
    </Box>
  );
};

export default GameApp;
