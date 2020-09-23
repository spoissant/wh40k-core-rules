import { SECONDARY_CATEGORIES } from "./common";

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

export default SECONDARIES;
