import React from "react";
import { GAME_MODES, BATTLE_SIZES, SECONDARY_CATEGORIES } from "./common";

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

export default MISSIONS;
