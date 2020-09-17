import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

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
    const step = gameState?.step ?? steps[0];
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
      <Switch style={{ flex: 1 }}>
        <Route key="player1" path={`${match.path}/player1`}>
          <Player idx={0} next={next} />
        </Route>
        <Route key="player2" path={`${match.path}/player2`}>
          <Player idx={1} next={next} />
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
          Some text to explain these steps: 8. Determine Attacker and Defender
          9. Choose Deployment Zone 10. Declare Reserves and Transports 11.
          Deploy Armies 12. Determine First Turn 13. Resolve pre-battle
          abilities
          <Button variant="contained" color="primary" onClick={next}>
            Continue
          </Button>
        </Route>
        <Route key="make-war" path={`${match.path}/make-war`}>
          ScoreSheet goes here
        </Route>
      </Switch>
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

const Player = ({ idx, next }) => {
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

const SECONDARY_CATEGORIES = {
  MISSION_SPECIFIC: "Mission Specific",
  PURGE_THE_ENNEMY: "Purge the Ennemy",
  NO_MERCY_NO_RESPITE: "No Mercy, No Respite",
  BATTLEFIELD_SUPREMACY: "Battlefield Supremacy",
  SHADOW_OPERATIONS: "Shadow Operations",
  WARPCRAFT: "Warpcraft",
};

const BATTLE_SIZES = {
  COMBAT_PATROL: {
    key: "COMBAT_PATROL",
    name: "Combat Patrol",
    pts: 500,
    CP: 3,
    board: '44" x 30"',
  },
  // INCURSION: {
  //   key: 'INCURSION',
  //   name: "Incusrion",
  //   pts: 1000,
  //   CP: 6,
  // board: '44" x 30"',
  // },
  // STRIKE_FORCE: {
  //   key: 'STRIKE_FORCE',
  //   name: "Strike Force",
  //   pts: 2000,
  //   CP: 12,
  //board: '44" x 60"',
  // },
  // ONSLAUGHT: {
  //   key: 'ONSLAUGHT',
  //   name: "Onslaught",
  //   pts: 3000,
  //   CP: 18,
  // board: '44" x 90"',
  // },
};

const GAME_MODES = {
  MATCHED_PLAY: "Matched Play",
  CRUSADE: "Crusade",
  OPEN_PLAY: "Open Play",
};

const MISSIONS = [
  {
    mode: GAME_MODES.MATCHED_PLAY,
    size: BATTLE_SIZES.COMBAT_PATROL.key,
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
        description: () => (
          <>
            At the end of each player’s Command phase, the player whose turn it
            is scores 5 victory points for each of the following conditions they
            satisfy (for a maximum of 15 victory points):
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
        description:
          "Score 5 victory points if you control the objective marker in your opponent’s deployment zone at the end of your turn.",
        points: [0, 5, 10, 15],
      },
    ],
    deployment: "incisive_attack.png",
  },
  // {
  //   mode: GAME_MODES.MATCHED_PLAY,
  //   size: BATTLE_SIZES.COMBAT_PATROL.key,
  //   name: "Outriders",
  //   source: "core",
  // },
  // {
  //   mode: GAME_MODES.MATCHED_PLAY,
  //   size: BATTLE_SIZES.COMBAT_PATROL.key,
  //   name: "Encircle",
  //   source: "core",
  // },
];

const SECONDARIES = [
  {
    name: "Assassinate",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 3 victory points at the end of the battle for each enemy CHARACTER model that is destroyed.",
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "Bring it Down",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 2 victory points at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 10 or less that is destroyed, and 3 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 11 or more that is destroyed.",
    points: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Titan Slayer",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 10 victory points at the end of the battle if one enemy TITANIC model is destroyed, or 15 victory points if two or more enemy TITANIC models are destroyed.",
    points: [0, 10, 15],
  },
  {
    name: "Slay the Warlord",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 6 victory points at the end of the battle if the enemy Warlord is destroyed.",
    points: [0, 6],
  },
  {
    name: "Thin their Ranks",
    type: "End Game",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "If you select this objective, keep a tally of kill points; each time an enemy model is destroyed, add 1 to this tally (add 10 to this tally instead if the model that was destroyed had a Wounds characteristic of 10 or more). A model can, if it is resurrected for any reason (i.e. it was destroyed and subsequently returned to the battlefield), potentially add several points to this tally (assuming it is resurrected and subsequently destroyed several times over). At the end of the battle, divide your kill points tally by 10 and round down - the result is the number of victory points you score.",
    points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Attrition",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "Score 4 victory points at the end of the battle round if more enemy units than friendly units were destroyed this battle round.",
    points: [0, 4, 8, 12, 15],
  },
  {
    name: "While we Stand we Fight",
    type: "End Game",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "If you select this objective, then before the battle you must identify which three models from your army (excluding models with the Fortifications Battlefield Role) have the highest points value, and make a note of them on your army roster (if two or more are models are tied, you can choose between them). If your army has three or fewer models, then you instead identify all the units in your army. A model's points cost includes the points of all weapons and wargear it is equipped with. You score 5 victory points for each of these models that are on the battlefield at the end of the battle.",
    points: [0, 5, 10, 15],
  },
  {
    name: "First Strike",
    type: "End Game",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "Score 5 victory points at the end of the battle if any enemy units were destroyed in the first battle round, and score an additional 3 victory points if more enemy units than friendly units were destroyed in the first battle round.",
    points: [0, 5, 8],
  },
  {
    name: "Engage on All Fronts",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.BATTLEFIELD_SUPREMACY,
    description:
      'Score 2 victory points at the end of your turn if you have one or more units from your army wholly within three different table quarters, and those units are all more than 6" from the centre of the battlefield. Score 3 victory points instead if you have one or more units from your army wholly within each table quarter, and those units are all more than 6" from the centre of the battlefield.',
    points: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Linebreaker",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.BATTLEFIELD_SUPREMACY,
    description:
      "Score 4 victory points at the end of your turn if two or more units from your army (excluding AIRCRAFT) are wholly within your opponent's deployment zone.",
    points: [0, 4, 8, 12, 15],
  },
  {
    name: "Domination",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.BATTLEFIELD_SUPREMACY,
    description:
      "Score 3 victory points if you control more than half the total number of objective markers on the battlefield at the end of your turn.",
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "Investigate Sites",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      'Score 3 victory points each time a unit from your army successfully completes the following action: Investigate Site (Action): One INFANTRY unit (excluding CHARACTERS) from your army can start to perform this action at the end of your Movement phase if it is within 6" of the centre of the battlefield and no enemy units (excluding AIRCRAFT) are within 6" of the centre of the battlefield. The Action is completed at the end of your turn.',
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "Repair Teleport Homer",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      "Score 5 victory points each time a unit from your army successfully completes the following action: Repair Teleport Homer (Action): One INFANTRY unit from your army can start to perform this action at the end of your Movement phase if it is wholly within your opponent's deployment zone. The Action is completed at the end of your next Command phase provided the unit attempting it is still wholly within your opponent's deployment zone.",
    points: [0, 5, 10, 15],
  },
  {
    name: "Raise the Banners High",
    type: "Progressive and Eng Game",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      "If you select this objective, then units in your army can perform the following action: Raise Banners (Action): One or more INFANTRY units from your army can start to perform this action at the end of your Movement phase. Each unit from your army that starts to perform this action must be in range of a different objective marker that does not have one of your banners raised upon it (see below). A unit cannot start this action while there are any enemy units (excluding AIRCRAFT) in range of the same objective marker. The Action is completed at the end of your turn. If this Action is successfully completed, that objective marker is said to have one of your army’s banners raised on it (the banner is ‘removed’ if your opponent controls the objective marker at the start of any phase). You score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised upon it.",
    points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Mental Interrogation",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      'Score 3 victory points each time you successfully complete the following psychic action: Mental Interrogation (Psychic Action - Warp Charge 4): One PSYKER CHARACTER from your army can attempt to perform this psychic action in your Psychic phase if it is within 18" of any enemy CHARACTER models.',
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "Psychic Ritual",
    type: "End Game",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      'Score 15 victory points at the end of the battle if any unit from your army successfully completed the following psychic action 3 times during the battle: Psychic Ritual (Psychic Action - Warp Charge 3): One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 6" of the centre of the battlefield.',
    points: [0, 15],
  },
  {
    name: "Abhor the Witch",
    type: "End Game",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      "You cannot select this secondary objective if your army includes any PSYKER units. Score 5 victory points at the end of the battle for each enemy PSYKER CHARACTER unit that is destroyed, and 3 victory points for every other enemy PSYKER unit that is destroyed.",
    points: [0, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15],
  },
];

// 1. Select Battle Size
// 2. Muster Armies
// 3. Determine Mission
// 4. Read Mission Briefing
const ChooseMission = ({ next }) => {
  const { gameState, setGameState } = useGameContext();

  const [mode, setMode] = useState(gameState.mode ?? GAME_MODES.MATCHED_PLAY);
  const [size, setSize] = useState(
    gameState.size ?? BATTLE_SIZES.COMBAT_PATROL.key
  );
  const [mission, setMission] = useState(
    MISSIONS.find((m) => m.name === gameState.mission)
  );

  const onSave = () => {
    setGameState((prev) => ({ ...prev, mode, size, mission: mission.name }));

    next();
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
            setSize(BATTLE_SIZES.COMBAT_PATROL.key);
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
                {m.name}
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
            <Box key={o.name}>
              <h3>{o.name}</h3>
              <h4>{o.type}</h4>
              <Box>{o.description}</Box>
            </Box>
          ))}
          <h2>Secondary Objectives</h2>
          {mission.secondary_objectives.map((o) => (
            <Box key={o.name}>
              <h3>{o.name}</h3>
              <h4>{o.type}</h4>
              <Box>{o.description}</Box>
            </Box>
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
        <Button variant="contained" color="primary" onClick={onSave}>
          Continue
        </Button>
      )}
    </Box>
  );
};

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

export default GameApp;
