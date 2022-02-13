import { SECONDARY_CATEGORIES } from "./common";

const SECONDARIES = [
  {
    name: "Assassination",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 3 victory points at the end of the battle for each enemy CHARACTER model that is destroyed. If the enemy WARLORD was destroyed during the battle, gain 1 additional victory point.",
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "For the emperor! (Astra Militarum)",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 1 victory point at the end of the battle round for each enemy unit that was destroyed during that battle round by an ASTRA MILITARUM unit from your army (to a maximum of 3 victory points per battle round)",
    points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Bring it Down",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 1 victory point at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteriscit of 9 or less that is destroye, 2 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of between 10-14 that is destroyed, and 3 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 15 or more that is destroyed.",
    points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Titan Hunter",
    type: "End Game",
    category: SECONDARY_CATEGORIES.PURGE_THE_ENNEMY,
    description:
      "Score 4 victory points at the end of the battle if one enemy TITANIC model is destroyed, 9 victory points if two enemy TITANIC models are destroyed, or 15 victory points if three or more enemy TITANIC models are destroyed.",
    points: [0, 4, 9, 15],
  },
  {
    name: "No prisoners",
    type: "End Game",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "If you select this objective, keep a tally of kill points; each time an enemy model is destroyed, unless that model is a VEHICLE, MONSTER or CHARACTER unit, add a number of marks to this tally equal to the Wounds characteristic of the destroyed model. A model can, if it is resurrected for any reason, potentially have marks added to this tally several times.<br/><br/>At the end of the battle, divide your Kill Points tally by 10 and round down - the result is the number of victory points you score. In addition, if your Kill Points tally is between 50 and 99, you score 1 additional victory point, and if your Kill Points tally is 100 or more, you score 2 additional victory points.",
    points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Grind them down",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "Score 3 victory points at the end of the battle round if more ennemy units than friendly units were destroyed this battle round.",
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "To the last",
    type: "End Game",
    category: SECONDARY_CATEGORIES.NO_MERCY_NO_RESPITE,
    description:
      "If you selec tthis objective, then before the battle, after you have selected deployment zones, identify which three units from your army (excluding those with the Fortifications Battlefield Role) have the highest points value, and make a note of them on your army roster (if two of more are tied ,you choose between them). If your army has three or fewer units, you instead identifiy all the units in your army. You score 5 victory points for each of these units that are on the battlefield at the end of the battle. If a unit splits into several smaller units during the battle, all of those separate units (excluding DRONE units) must be on the battlefield at the end of the battle to score 5 victory points; if some of those separate units (excluding DRONE units) are on the battlefield at the enf of the battle, but not all of them are, you score 3 victory points instead of 5.",
    points: [0, 3, 5, 6, 8, 9, 10, 11, 12, 13, 15],
  },

  {
    name: "Abhor the Witch",
    type: "End Game",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      "You cannot select this secondary objective if your army includes any PSYKER units. Score 3 victory points at the end of the battle for each enemy PSYKER CHARACTER unit that is destroyed, and 2 victory points for every other enemy PSYKER unit that is destroyed.",
    points: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Warp Ritual",
    type: "End Game",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      'If you select this objective, keep a Ritual Points tally; add 1 to that tally each time a unit from your army successfully completes the following psychic action during the battle:<br/><br/> Warp Ritual (Psychic Action - Warp Charge 3): One PSYKER CHARACTER unit from your army can attemps to perform this psychic action in your Psychic phase if it is within 6" of the cenerr of the battlefield.<br/><br/>At the end of the battle, score 3 victory points if your Ritual Points tally is 1, score 7 victory points if your tlaly is 2, or score 12 victory pointe if your tlaly is 3 or more.',
    points: [0, 3, 7, 12],
  },
  {
    name: "Pierce the Veil",
    type: "End Game",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      'Score 8 victoy points at the end of the battle if one or more units from your army successfully completed the following psychic action 2 or more times during the battle, or 15 victory points at the end of the bttale if one or more units from your army successfully completed the following psychic action 4 times during the battle (note that you can only score this objective once):<br/></br>Pierce the Veil (Psychic Action - Warp Charge 4): One PSYCHER CHATACTER unit from your army can attempt to perform this psychic action during your Psychic phase if it is within 6" of your opponents\'s battlefield edge and more than 6" from any enemy models.',
    points: [0, 8, 15],
  },
  {
    name: "Psychic Interrogation",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.WARPCRAFT,
    description:
      'Score 3 victory points each time you successfully complete the following psychic action:<br/><br/>Psychic Interrogation (Psychic Action - Warp Charge 4): One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 24" of any enemy CHARACTER units.',
    points: [0, 3, 6, 9, 12, 15],
  },

  {
    name: "Raise the Banners High",
    type: "Progressive, End Game",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      "If you select this objective, then units in your army can perform the following action:<br/><br/>Raise Banners (Action): One or more INFANTRY units from your army can start to perform this action at the end of your movement phase. Each unit from your army that starts to perform this action must be in range of a different objective marker that does not have one of your banners raised upon it (see below). A unit cannot start this action while there are any enemy units (excluding AIRCRAFT units) in range of the same objective marker. The action is completed at the end of yor trn. If this action is sucessfully completed, that objective marker is said to have one of your army's banners raised on it (the banner is `removed` if your opponent controls the objective marker at the start of any phase).<br/><br/>Score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised upon it.",
    points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Investigate Signal",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      'Score 3 victory points each time a unit from your army succesfully completes the following action:<br/><br/>Investigate Signal (Action): One INFANTRY unit from your army that contains 3 or more models can start to perform this action at the enf of your Movement phase if it is wholly within 6" of the cneter of the battlefield. This action is completed at the end of your turn provided the unit attempting is still wholly within 6" of the center of the battlefield ad no ennemy units (excluding AIRCRAFT units) are wholly within 6" of the center of the battlefield.',
    points: [0, 3, 6, 9, 12, 15],
  },
  {
    name: "Retrieve Nachmund Data",
    type: "End Game",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      'If you select this objective, keep a Retrieved Data tally. In addition , units in your army can perform the following action:<br/><br/>Retrieve Data (Action): One INFANTRY or BIKER unit from your army can start to perform this action at the end of your Movement phase if it is wholly within a table quarter that has not had a servo-skull retrieved by your army (see below) and it is more than 6" away from any other table quarter. This action is completed at the end of your turn provided the unit attempting it is still within the same table quarter. If this action is succesfully completed, roll one D6, substracting 1 from the result if the unit that completed the action has the Troops battlefield role: if the result is less than or equal to the number of models currently in that unit, that table quarter is ssaid to have had a servo-skull retrieved by your army and you add 1 to your Retrieved Data tally.<br/><br/>At the end of the battle, score 4 victory points if your Retrieved Data tally is 2, score 8 victory points if your tally is 3, or score 12 victory points if your tally is 4.',
    points: [0, 4, 8, 12],
  },
  {
    name: "Deploy Teleport Homers",
    type: "Progressive, End Game",
    category: SECONDARY_CATEGORIES.SHADOW_OPERATIONS,
    description:
      "Deploy Teleport Homer (Action): One INFANTRY or BIKER unit from yourarmy can start to perform this action at th e end ofyour Movement phase if it is wholly within 12\" of your opponent's deployment zone. If the unit attempting this action has the Troops battlefield role, the action is completed at the end of your turn; otherwise the action is comlpeted at the end of your next Command phase. In either case, the action is only completed if the unit attempting it is still wholly within 12\" of your oponent's deployemnt zone.<br/><br/>Each time a unit from your army successfully completes this action, you score 2 victory points (you score 4 victory points instead if the unit completed the action while wholly within your opponent's deployment zone).",
    points: [0, 2, 4, 6, 8, 10, 12, 14],
  },

  {
    name: "Behind Enemy Lines",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.BATTLEFIELD_SUPREMACY,
    description:
      "Score 2 victory points at the end of your turn if one unit from your army (excluding AIRCRAFT units) is wholly within your opponent's deployment zone. Score 4 victory points at the end of your turn instead if two or more units from your army (excluding AIRCRAFT units) are wholly within your opponents's deployment zone.",
    points: [0, 2, 4, 6, 8, 10, 12, 14],
  },
  {
    name: "Engage on all Fronts",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.BATTLEFIELD_SUPREMACY,
    description:
      'Score 2 victory points at the end of your turn if you have one or more qualifying units (see below) from your army wholly within three different table quarters, and those units are all more than 6" from the center of the battlefield. Score 3 victory points instead if you have one or more qualifying units from your army wholly withni each table quarter, and those units are all more than 6" from the center of the battlefield. A qualifying unit is one that contains 3 or more models, or one that contains 1 or more VEHICLE or MONSTER models.',
    points: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    name: "Stranglehold",
    type: "Progressive",
    category: SECONDARY_CATEGORIES.BATTLEFIELD_SUPREMACY,
    description:
      "Score 3 victory points at the end of your turn if you control 3 or more objetive markers and you also control more objective marker than your opponent controls",
    points: [0, 3, 6, 9, 12, 15],
  },
];

export default SECONDARIES;
