import React from "react";
import { GAME_MODES, BATTLE_SIZES, SECONDARY_CATEGORIES } from "./common";

const MISSIONS = [
  // {
  //   mode: GAME_MODES.MATCHED_PLAY,
  //   size: BATTLE_SIZES.COMBAT_PATROL.key,
  //   name: "Incisive Attack",
  //   source: "core",
  //   briefing:
  //     "Two forces have dug in and fought to a stalemate. Adopting a new approach to the war, opportunistic bands of warriors now venture forth into no man’ land to seize vital ground and defeat the enemy with surgical assaults across the front.",
  //   rules: [
  //     {
  //       name: "Sweep and Clear",
  //       description:
  //         "In this mission, if you control an objective marker at the end of your Command phase, it remains under your control, even if you have no models within range of it, unless your opponent controls it at the end of any subsequent phase.",
  //     },
  //   ],
  //   primary_objectives: [
  //     {
  //       name: "Take and Hold",
  //       type: "Progressive",
  //       description: () => (
  //         <>
  //           At the end of each player’s Command phase, the player whose turn it
  //           is scores 5 victory points for each of the following conditions they
  //           satisfy (for a maximum of 15 victory points):
  //           <ul>
  //             <li>They control one or more objective markers.</li>
  //             <li>hey control two or more objective markers.</li>
  //             <li>
  //               They control more objective markers than their opponent
  //               controls.
  //             </li>
  //           </ul>
  //         </>
  //       ),
  //     },
  //   ],
  //   secondary_objectives: [
  //     {
  //       name: "Surgical Assault",
  //       type: "Progressive",
  //       category: SECONDARY_CATEGORIES.MISSION_SPECIFIC,
  //       description:
  //         "Score 5 victory points if you control the objective marker in your opponent’s deployment zone at the end of your turn.",
  //       points: [0, 5, 10, 15],
  //     },
  //   ],
  //   deployment: "incisive_attack.png",
  // },
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
  {
    mode: GAME_MODES.MATCHED_PLAY,
    size: BATTLE_SIZES.INCURSION.key,
    name: "Cleanse the Land",
    source: "Chapter Approved 2022",
    briefing: "",
    rules: [
      {
        name: "Land Purged",
        description:
          "In this mission, if a player controls an objective marker at the end of their Command Phase and one or more of their units that are in range of it has the Objective Secured ability or a similar rule, it remains under that player's control unless their oponent contorls it at the end f any subsequent phase, even if there are no models within range of it.",
      },
    ],
    primary_objectives: [
      {
        name: "Take and Hold",
        type: "Progressive",
        description: () => (
          <>
            <p>
              At the end of each player’s Command phase, the player whose turn
              it is scores 4 victory points for each of the following conditions
              they satisfy (for a maximum of 12 victory points):
            </p>
            <ul>
              <li>They control one or more objective markers.</li>
              <li>They control two or more objective markers.</li>
              <li>
                They control more objective markers than their opponent
                controls.
              </li>
            </ul>
            <p>
              This primary objective cannot be scored in the first battle round.
              In the fifth battle round, the player who has the second turn does
              not score any victory points at the end of their Command phase;
              instead, at the end of the their turj, they score 4 victory points
              for each of the above conditions they satisfy (for a maximum of 12
              victory points).
            </p>
          </>
        ),
        points: [0, 4, 8, 12],
      },
      {
        name: "Direct Assault",
        type: "Progressive",
        description: () => (
          <>
            <p>
              At the end of each player's turn, the player whose turn it is
              scores 2 victory points if they satisfy one of the following
              conditions, or 3 victory points if they satisfy both of the
              following conditions:
            </p>
            <ul>
              <li>
                They control every objecvtive marker on the battlefield or they
                control at least one objective marker that they did not control
                at the start of their turn.
              </li>
              <li>
                They destroyed at least one enemy unit that was in range of an
                objective marker at the start of their turn.
              </li>
            </ul>
          </>
        ),
        points: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      },
    ],
    depoyment: "cleanse_the_land.png",
  },
];

export default MISSIONS;
