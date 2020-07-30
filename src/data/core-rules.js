// https://regexr.com/59581
// regex: \s?([^\n\r]*)
// list: {text:<>$1",tags:['main'],children:[],},\n
import React from "react";
import styled from "styled-components";

const Rule = styled.span`
  font-weight: bold;
`;

const Keyword = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const TableTitle = styled.div`
  text-transform: uppercase;
  background: #120e0d;
  color: #e7e7e5;
  padding: 4px 8px;
  font-size: 19px;
  font-weight: 700;
`

const Table = styled.table`
  border: 1px solid #120e0d;
  width: 100%;
  margin-bottom: 12px;
  border-spacing: 0;
  & th, & td {
    padding: 6px;
  }
`

const TableHead = styled.thead`
  background: #cdd2ce;
  outline: 1px solid #120e0d;
  & th {
    font-size: 18px;
  }
`

const TableBody = styled.tbody`
  & tr:nth-child(even) {
    background: #cdd2ce;
  }
  & tr:nth-child(odd) {
    background: #eae9e6;
  }
`

const Red = styled.span`
  color: #9f191e;
  font-weight: 700;
`

const DiceResult = styled.div`
font-weight: 700;
font-size: 18px;
text-align: center;
`

export default {
  text: <>Warhammer 40,000 Core Rules</>,
  tags: ["core"],
  children: [
    {
      text: <>Basic Rules</>,
      level: 1,
      tags: ["core"],
      children: [
        {
          text: <>Army</>,
          level: 3,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Army:</Rule> Collection of models under your
                      command.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Keywords</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Keywords:</Rule> Appear in rules in{" "}
                      <Keyword>Keyword Bold</Keyword> font.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Keyworded rules apply to units and models with that
                      keyword
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Keyword>{"<Keywords>"}</Keyword> are chosen by you when a
                      unit is added to your army.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Units</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Unit:</Rule> A group of models from the same
                      datasheet.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Friendly models = all models in the same army.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Enemy models = all models in your opponent's army</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Enemy units = all units in opponent’s army</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Unit Coherency</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Unit coherency:</Rule> 2" horizontally + 5"
                      vertically.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Each model must be in unit coherency with one other model
                      from own unit.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      While unit has 6+ models, each model must be in unit
                      coherency with 2 other models from own unit
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Engagement Range</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Engagement Range:</Rule> 1" horizontally + 5"
                      vertically
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Models cannot be set up within Engagement Range of enemy
                      models.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          text: <>Measuring Distances</>,
          level: 3,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: <>Distances measured in inches (").</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Always measure closest distance between bases(or hulls).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>Hull = Any part of a model that does not have a base.</>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Can measure distances whenever you want.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      If several units tied for closest, player resolving the
                      ruleselects which is closest.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Within and Wholly Within</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: <>Model within = any part of model’s base (or hull).</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Model wholly within = every part of model’s base (or
                      hull).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Unit within = any model within.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Unit wholly within = every model wholly within</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          text: <>Dice</>,
          level: 3,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: <>D6 = A six-sided dice.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>D3 = D6 divided by 2 (rounding up).</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>All modifiers cumulative.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Apply modifiers in the following order:
                      division,multiplication, addition, then subtraction.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Round fractions up after all modifiers have been
                      applied.Dice roll cannot be modified to less than 1.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Re-Rolls</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Re-roll:</Rule> Roll dice again.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Re-rolls are applied before modifiers (if any).</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>A dice can never be re-rolled more than once.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Rule>Unmodified dice:</Rule> Result of roll after
                      re-rolls, but before modifiers (if any).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Roll-Offs</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Roll-off:</Rule> Both players roll a D6 – highest
                      wins.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Roll again if a tie.</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Sequencing</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      If several rules must be resolved at the same time, the
                      player whose turn it is chooses the order to resolve them.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Starting Strength, Half-Strength and Destroyed Units</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Starting Strength:</Rule> Number of models in unit
                      when it is added to your army.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      When a model is destroyed, remove it from the battlefield.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Rule>Below Half-strength:</Rule> Number of models in unit
                      is less than half its Starting Strength.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      When the last model in a unit is destroyed, the unit is
                      said to be destroyed.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: <>Datasheet</>,
      level: 2,
      tags: ["core"],
      children: [
        {
          text: <>Damage Tables</>,
          level: 4,
          tags: ["core"],
          children: [
            {
              text: (
                <>
                  <Rule>Damage table:</Rule> Model’s characteristics change as
                  it loses wounds.
                </>
              ),
              tags: ["core"],
              children: [],
            },
          ],
        },
        {
          text: <>Modifying Characteristics</>,
          level: 4,
          tags: ["core"],
          children: [
            {
              text: <>All characteristic modifiers are cumulative.</>,
              tags: ["core"],
              children: [],
            },
            {
              text: (
                <>
                  Apply modifiers in the following order: division,
                  multiplication, addition, then subtraction.
                </>
              ),
              tags: ["core"],
              children: [],
            },
            {
              text: <>Round fractions up after applying all modifiers.</>,
              tags: ["core"],
              children: [],
            },
            {
              text: <>S, T, A and Ld can never be modified below 1.</>,
              tags: ["core"],
              children: [],
            },
            {
              text: (
                <>
                  Random Move characteristics determined for whole unit each
                  time it moves.
                </>
              ),
              tags: ["core"],
              children: [],
            },
            {
              text: (
                <>
                  Other random characteristics determined individually when
                  characteristic required.
                </>
              ),
              tags: ["core"],
              children: [],
            },
            {
              text: <>Characteristic of ‘-’ can never be modified.</>,
              tags: ["core"],
              children: [],
            },
          ],
        },
      ],
    },
    {
      text: <>Stragegic Reserves</>,
      level: 3,
      tags: ["main"],
      children: [
        {
          text: <>Placing Units into Strategic Reserves</>,
          level: 4,
          tags: ["main"],
          children: [],
        },
        {
          text: <>Arriving from Strategic Reserves</>,
          level: 4,
          tags: ["main"],
          children: [],
        },
        {
          text: <>Setting up Strategic Reserve Units</>,
          tags: ["main"],
          children: [],
        },
        {
          text: <>Advanced Rules</>,
          level: 4,
          tags: ["main", "advanced"],
          children: [
            {
              text: <>Aircraft and Strategic Reserves</>,
              level: 4,
              tags: ["main"],
              children: [],
            },
          ],
        },
      ],
    },
    {
      text: <>Actions</>,
      level: 2,
      tags: ["main"],
      children: [
        {
          text: <>Performing Actions</>,
          level: 3,
          tags: ["main"],
          children: [],
        },
        {
          text: <>Performing Psychic Actions</>,
          level: 3,
          tags: ["main"],
          children: [],
        },
      ],
    },
    {
      text: <>Terrain Features</>,
      level: 2,
      tags: ["main"],
      children: [
        {
          text: <>Terrain Categories</>,
          level: 3,
          tags: ["main"],
          children: [
            {
              text: null,
              level: 4,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Each terrain feature belongs to one of the following
                      categories: Hills, Obstacles, Area Terrain or Buildings.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Some models can gain the nenefits of cover fom some
                      Terrain features (see terrain traits).
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Hills</>,
              level: 4,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Hills are considered to be part of the battlefield rather
                      than a terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>Models move over hils using normal rules for movement.</>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Models use normal rules to determine if a model behind a
                      hill is visible.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Hill cannot be attacked.</>,
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Obstacles</>,
              level: 4,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Models move over Obstacles using normal rules for
                      movement.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Models use normal rules to determine if a model behind an
                      Obstacle is visible.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Obstacles cannot be attacked.</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Keyword>Infantry</Keyword>, <Keyword>Beasts</Keyword> and{" "}
                      <Keyword>Swarm</Keyword> models receive the{" "}
                      <Rule>benefit of cover</Rule> while within 3", unless a
                      straight line can be drawn from the attacker to ALL parts
                      of the target model without it passing over or through
                      this terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Area Terrain</>,
              level: 4,
              tags: ["main"],
              children: [
                {
                  text: <>Area Terrain has a footprint.</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Footpring = boundary of terrain feature at ground level.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Models move over Area Terrain using normal rules for
                      movement.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Models use normal rules to determine if a model behind
                      Area Terrain is visible.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Are Terrain cannot be attacked.</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Keyword>Infantry</Keyword>, <Keyword>Beasts</Keyword> and{" "}
                      <Keyword>Swarm</Keyword> models receive the{" "}
                      <Rule>benefits of cover</Rule> while they are within it.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Buildings</>,
              level: 4,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Buildings are considered to be units, rather than terrain
                      features.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Models cannot move across Buildings.</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Models use normal rules to determine if a model behind a
                      building is visible.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Enemy Buildings can be attacked.</>,
                  tags: ["main"],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          text: <>Terrain Traits</>,
          level: 3,
          tags: ["main"],
          children: [
            {
              text: <>Defensible</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      <Keyword>Infantry</Keyword> units can Hold Steady or Set
                      to Defend (if no enemy within Engagement Range).
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Rule>Hold Steady</Rule>: Overwatch attacks hit on 5+.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Rule>Set to Defend:</Rule>: Cannot fire Overwatch but add
                      1 to hit rolls in next Fight phase.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Defence Line</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Can make a charge move against a unit within 1" of this
                      terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Can fight if within 2" of ennemy</>,
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Breachable</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      <Keyword>Infantry</Keyword>, <Keyword>Beasts</Keyword> and{" "}
                      <Keyword>Swarm</Keyword> can move through walls, girder,
                      chains and foliage.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Difficult Ground</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Substract 2" when making a Normal Move, Advance, Fall Back
                      or Charge move over this terrain feature (unlesss moving
                      unit can <Keyword>Fly</Keyword>).
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Dense Cover</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Substract 1 from hit rolls made for ranged weapons if at
                      least 3" tall and no lines can be drawn without passing
                      over this terrain feature between attacking model and any
                      one model in target unit.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Does not apply to models that are only shooting through
                      their own terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      No penalty when shooting at <Keyword>Aircraft</Keyword>{" "}
                      and units with W characteristic of 18+.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Unstable Position</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Models cannot be set up or end a move on top of this
                      terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Exposed Position</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Models do not receive <Rule>benefits of cover</Rule> while
                      on top of this terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Obscuring</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: <>Blocks visibility if at least 5" tall.</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Models on or within can see and be seen normally.</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Keyword>Aircraft</Keyword> and models with W
                      characteristic of 18+ are visible and can be targeted
                      through this terrain feature. (the reverse is not true)
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Light Cover</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      +1 to saving throws against ranged weapons for models
                      receiveing the <Rule>benefits of cover</Rule> from this
                      terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Invulnerable saving throws unaffected.</>,
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Heavy Cover</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      +1 to saving throws against melee weapons (unless
                      attacking model has made a charge move this turn) for
                      models receiveing the <Rule>benefits of cover</Rule> from
                      this terrain feature.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: <>Invulnerable saving throws unaffected.</>,
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Scaleable</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: (
                    <>
                      Only <Keyword>Infantry</Keyword>,{" "}
                      <Keyword>Beasts</Keyword>, <Keyword>Swarm</Keyword> and{" "}
                      <Keyword>Fly</Keyword> models can be set up or end a move
                      on top of this terrain feature (exluding ground floor)
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      <Keyword>Infantry</Keyword>, <Keyword>Beasts</Keyword> and{" "}
                      <Keyword>Swarm</Keyword> models can move through the
                      floors, ceilings and gantries.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
            {
              text: <>Inspiring</>,
              level: 5,
              tags: ["main"],
              children: [
                {
                  text: <>+1 Ld if wholly within 6"</>,
                  tags: ["main"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Can be given <Keyword>Keyword(s)</Keyword> in which case
                      the effect only applies to matching units.
                    </>
                  ),
                  tags: ["main"],
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: <>The Battle Round</>,
      level: 1,
      tags: ["core"],
      children: [
        {
          text: <>Out of Phase Rules</>,
          level: 4,
          tags: ["core"],
          children: [
            {
              text: (
                <>
                  When resolving an out of phase rule, all rules that normally
                  apply in that phase continue to apply.
                </>
              ),
              tags: ["core"],
              children: [],
            },
            {
              text: (
                <>
                  Phase-specific Stratagems cannot be used when resolving out of
                  phase rules.
                </>
              ),
              tags: ["core"],
              children: [],
            },
          ],
        },
        {
          text: <>Command Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: (
                <>
                  <Rule>Battle-forged CP bonus</Rule>: Gain 1 CP if army is
                  Battleforged.
                </>
              ),
              tags: ["core"],
              children: [],
            },
            {
              text: (
                <>
                  Resolve any rules that occur in the Command phase. Progress to
                  the Movement phase (pg 10).
                </>
              ),
              tags: ["core"],
              children: [],
            },
            {
              text: <>Progress to the Movement phase (pg 10).</>,
              tags: ["core"],
              children: [],
            },
          ],
        },
        {
          text: <>Movement Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      The Movement phase is split into two steps. First you move
                      your units. Then you can set up Reinforcements that have
                      not yet arrived.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                { text: <>1. Move Units</>, tags: ["core"], children: [] },
                { text: <>2. Reinforcements</>, tags: ["core"], children: [] },
              ],
            },
            {
              text: <>1. Move Units</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: null,
                  tags: ["core"],
                  children: [
                    {
                      text: <>Select a unit in your army to move.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          When a unit moves it can either make a Normal Move,
                          Advance or Remain Stationary.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Units that are within Engagement Range of any enemy
                          models can only either Fall Back or Remain Stationary.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Select another unit in your army to move.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Once all your units have moved, progress to the
                          Reinforcements step (pg 11).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Normal Move</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Normal Move:</Rule> Models move up to M".
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Cannot move within Engagement Range of any enemy
                          models.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Advance</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Advance:</Rule> Models move up to M+D6".
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Cannot move within Engagement Range of enemy models.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>Units that Advance cannot shoot or charge this turn</>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Remain Stationary</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Remain Stationary:</Rule> Models cannot move
                          this phase.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Fall Back</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Fall Back</Rule>: Models move up to M".
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Units that Fall Back cannot charge this turn.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Units that Fall Back cannot shoot or manifest psychic
                          powers this turn unless they are Titanic.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: <>2. Reinforcements</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Reinforcement unit:</Rule> Unit that starts the
                      battle in a location other than the battlefield.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Set up your Reinforcement units, one at a time, as
                      described by the rules that let them start the battle in
                      locations other than the battlefield.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Reinforcement units cannot make a Normal Move, an Advance,
                      Fall Back or Remain Stationary this turn.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Reinforcement units always count as having moved this
                      turn.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Any Reinforcement unit not set up on the battlefield by
                      the end of the battle counts as destroyed.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Once all your Reinforcement units have been set up,
                      progress to the Psychic phase (pg 14).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Advanced Rules</>,
              level: 4,
              tags: ["advanced", "core"],
              children: [
                {
                  text: <>Moving Over Terrain</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Models can move freely over terrain features 1" or
                          less in height.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Models cannot move through taller terrain features,
                          but can climb up and down them.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Flying</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Keyword>Fly</Keyword> models can move over other
                          models when they make a Normal Move, an Advance or
                          when they Fall Back.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          <Keyword>Fly</Keyword> models ignore vertical
                          distances when they make a Normal Move, an Advance or
                          when they Fall Back.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Transports</>,
                  level: 3,
                  tags: ["core"],
                  children: [
                    {
                      text: <>Transport Capacity</>,
                      level: 5,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              <Rule>Transport capacity:</Rule> Maximum number of
                              models that can embark within the{" "}
                              <Keyword>Transport</Keyword>.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Units can start the battle embarked in a{" "}
                              <Keyword>Transport</Keyword>.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: <>Embark</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              Units can embark in a friendly{" "}
                              <Keyword>Transport</Keyword> if every model ends a
                              Normal Move, an Advance or a Fall Back within 3"
                              of it.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              A unit cannot embark within a{" "}
                              <Keyword>Transport</Keyword> that is within
                              Engagement Range of any enemy models.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              A unit cannot embark and disembark in the same
                              phase.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Units cannot do anything, or be affected in any
                              way, while they are embarked within a{" "}
                              <Keyword>Transport</Keyword>.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: <>Disembark</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              Units that start their Movement phase embarked in
                              a <Keyword>Transport</Keyword> can disembark this
                              phase.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              A unit must disembark before their{" "}
                              <Keyword>Transport</Keyword> moves.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Disembarking units must be set up wholly within 3"
                              of their <Keyword>Transport</Keyword> and not
                              within Engagement Range of any enemy models.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Units that have disembarked count as having moved
                              this turn.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: <>Destroyed Transports</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              If a <Keyword>Transport</Keyword> is destroyed,
                              resolve its Explodes ability (if it has one).
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>Any units embarked within must then disembark.</>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Roll one D6 for each model that disembarked; for
                              each 1, one model is destroyed.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Units that disembarked cannot charge or perform
                              Heroic Interventions this turn.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: <>Aircraft</>,
                  level: 3,
                  tags: ["core"],
                  children: [
                    {
                      text: <>Minimum Move</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              <Rule>Minimum move:</Rule> Models must move at
                              least their minimum M".
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              If a model cannot make its minimum move, it is
                              destroyed (unless you are using Strategic
                              Reserves).
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: <>Aircraft Egagement Range</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              Models can move within an enemy{" "}
                              <Keyword>Aircraft</Keyword>’s Engagement Range.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Models can move over <Keyword>Aircraft</Keyword>{" "}
                              (and their bases) when they make any kind of move.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              <Keyword>Aircraft</Keyword> can make a Normal Move
                              or an Advance even when within Engagement Range of
                              enemy models.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Units can make a Normal Move or an Advance if they
                              are only within Engagement Range of enemy{" "}
                              <Keyword>Aircraft</Keyword>
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: (
                        <>
                          Heroic Interventations, Pile Ins, Consolidations and
                          Aircrafts
                        </>
                      ),
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              When a model performs a Heroic Intervention, piles
                              in or consolidates, ignore{" "}
                              <Keyword>Aircraft</Keyword> (unless the model
                              moving can <Keyword>Fly</Keyword>).
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: <>Psychic Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      Select a <Keyword>Psyker</Keyword> in your army to
                      manifest its psychic powers.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Select another <Keyword>Psyker</Keyword> in your army to
                      manifest its psychic powers.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Once all your <Keyword>Psykers</Keyword> have manifested
                      psychic powers, progress to the Shooting phase (pg 15).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Psychic Powers</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: null,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          All <Keyword>Psykers</Keyword> know Smite.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          <Keyword>Psykers</Keyword> will know additional
                          psychic powers, as described on their datasheets.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Manifesting Psychic Powers</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: <>Select psychic power.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          You cannot select the same psychic power more than
                          once per battle round, unless that power is Smite.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Attempt to manifest the psychic power by taking a
                          Psychic test.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          The opponent can attempt to deny the psychic power by
                          taking a Deny the Witch test.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If successfully manifested, resolve the psychic
                          power’s effects.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Select another psychic power.</>,
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Psychic Tests</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Psychic test:</Rule> Passed if 2D6 equals or
                          exceeds psychic power’s warp charge.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If double 1 or double 6 rolled,{" "}
                          <Keyword>Psyker</Keyword> suffers Perils of the Warp.{" "}
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Deny the Witch</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Deny the Witch:</Rule> Passed if 2D6 exceeds
                          result of the opposing <Keyword>Psyker</Keyword>’s
                          Psychic test.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Only one attempt can be made to deny each psychic
                          power.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Smite</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Warp Charge 5</Rule>: A Psychic test of 5+ is
                          required to manifest Smite.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Warp charge increases by 1 for each other attempt to
                          manifest Smite made in this phase.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          {" "}
                          If manifested, closest visible enemy unit in 18"
                          suffers D3 mortal wounds.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If manifested with a Psychic test result of 11+, enemy
                          instead suffers D6 mortal wounds.{" "}
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Perils of the Warp</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Perils of the Warp</Rule>: The{" "}
                          <Keyword>Psyker</Keyword> unit manifesting the power
                          suffers D3 mortal wounds.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If <Keyword>Psyker</Keyword> unit is destroyed, the
                          psychic power fails to manifest.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          {" "}
                          If <Keyword>Psyker</Keyword> unit destroyed, every
                          other unit within 6" suffers D3 mortal wounds.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: <>Shooting Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: <>Select a unit from your army to shoot with.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      When a unit shoots, select targets then resolve attacks
                      with any or all ranged weapons that models in that unit
                      are equipped with.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Select another unit from your army to shoot with.</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Once you have shot with all your units, progress to the
                      Charge phase (pg 19).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Select Targets</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      Select targets for all weapons before any attacks are
                      resolved.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      At least one model in the target unit must be visible to
                      the attacking model and within range of the attacking
                      weapon.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      If a unit targets multiple units, all attacks against one
                      unit must be resolved before resolving attacks against the
                      next.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      If a unit shoots with multiple weapons, all attacks made
                      with weapons that have the same profile must be resolved
                      before resolving attacks with the next.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Locked in Combat</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      Units cannot shoot while they are within Engagement Range
                      of any enemy units.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Units cannot shoot at targets within Engagement Range of
                      any friendly units.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Number of Attacks</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      All of a ranged weapon’s attacks must be made against the
                      same target unit.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Number of attacks = number after weapon’s type. </>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Advanced Rules</>,
              level: 4,
              tags: ["advanced", "core"],
              children: [
                {
                  text: <>Big Guns Never Tire</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Keyword>Monsters</Keyword> and{" "}
                          <Keyword>Vehicles</Keyword> can shoot ranged weapons
                          even if within Engagement Range of enemy units.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          <Keyword>Monsters</Keyword> and{" "}
                          <Keyword>Vehicles</Keyword> can target other units,
                          but cannot resolve these attacks while any enemy
                          models remain within their Engagement Range.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Subtract 1 from hit rolls made when{" "}
                          <Keyword>Monsters</Keyword> and{" "}
                          <Keyword>Vehicles</Keyword> shoot Heavy weapons while
                          any enemy
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Look Out, Sir</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Cannot shoot at an enemy <Keyword>Character</Keyword>{" "}
                          with 9 or less wounds while it is within 3" of a
                          friendly unit (<Keyword>Monsters</Keyword>,{" "}
                          <Keyword>Vehicle</Keyword> or unit of 3+ models)
                          unless it is the closest target.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: <>Ranged Weapon Types</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: <>Assault</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>Can be shot even if firing model’s unit Advanced.</>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Subtract 1 from hit rolls if the firing model’s unit
                          Advanced.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Heavy</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Subtract 1 from hit rolls if firing model is{" "}
                          <Keyword>Infantry</Keyword> and its unit has moved
                          this turn.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Rapid Fire</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Double number of attacks made if target is within half
                          range.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Grenade</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Only one model can use a Grenade when its unit shoots.{" "}
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Pistol</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Can be shot even if firing model’s unit is within
                          Engagement Range of enemy unit.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>Cannot be shot alongside any other type of weapon.</>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Advanced Rules</>,
                  level: 4,
                  tags: ["advanced", "core"],
                  children: [
                    {
                      text: <>Blast Weapons</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              <Rule>Blast Weapons</Rule>: Minimum three attacks
                              against units with 6+ models. Always make maximum
                              number of attacks against units with 11+ models.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Can never be used to attack units within the
                              firing unit’s Engagement Range.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: <>Making Attacks</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: <>1. Hit Roll</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Hit roll (ranged weapon)</Rule>: Roll one D6;
                          hit scored if result equals or beats attacking model’s
                          BS. Otherwise attack fails.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          <Rule>Hit roll (melee weapon)</Rule>: Roll one D6; hit
                          scored if result equals or beats attacking model’s WS.
                          Otherwise attack fails.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Unmodified hit rolls of 1 always fail.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Unmodified hit rolls of 6 always succeed.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>Hit rolls cannot be modified by more than -1 or +1.</>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>2. Wound Roll</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <div>
                          <TableTitle>WOUND ROLL</TableTitle>
                          <Table>
                            <TableHead>
                              <tr>
                                <th>ATTACKER'S STRENGTH vs TARGET'S TOUGHNESS</th>
                                <th style={{textAlign: 'center'}}>D6 RESULT REQUIRED</th>
                              </tr>
                            </TableHead>
                            <TableBody>
                              <tr>
                                <td>Is the Strength <Red>TWICE (or more)</Red> than the Toughness</td>
                                <td><DiceResult>2+</DiceResult></td>
                              </tr>
                              <tr>
                                <td>Is the Strength <Red>GREATER</Red> than the Toughness</td>
                                <td><DiceResult>3+</DiceResult></td>
                              </tr>
                              <tr>
                                <td>Is the Strength <Red>EQUAL</Red> than the Toughness</td>
                                <td><DiceResult>4+</DiceResult></td>
                              </tr>
                              <tr>
                                <td>Is the Strength <Red>LOWER</Red> than the Toughness</td>
                                <td><DiceResult>5+</DiceResult></td>
                              </tr>
                              <tr>
                                <td>Is the Strength <Red>HALF (or less)</Red> than the Toughness</td>
                                <td><DiceResult>6+</DiceResult></td>
                              </tr>
                            </TableBody>
                          </Table>
                        </div>
                      ),
                      tags: ["core", "table"],
                      children: [],
                    },
                    {
                      text: null,
                      tags: [],
                      children: [
                        {
                          text: (
                            <>
                              <Rule>Wound roll</Rule>: Roll one D6 and compare
                              attack’s S with target’s T on table to the left.
                              Target wounded if score equals or beats the
                              required result. Otherwise attack fails.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: <>Unmodified wound rolls of 1 always fail.</>,
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>Unmodified wound rolls of 6 always succeed.</>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Wound rolls cannot be modified by more than -1 or
                              +1.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: <>3. Allocate Attack</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Allocate attack</Rule>: Player commanding target
                          unit selects one model in that unit. If a model in the
                          unit has already lost wounds, or has already had
                          attacks allocated to it this phase, they must select
                          that model.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>4. Saving Throw</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Saving throw</Rule>: Roll one D6 and modify by
                          the attack’s AP. If result less than the Sv of the
                          selected model, the saving throw is failed and it
                          suffers damage. Otherwise attack is saved.{" "}
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Unmodified saving throws of 1 always fail.</>,
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>5. Inflict Damage</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Inflict damage</Rule>: The selected model loses
                          a number of wounds equal to the attack’s D.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If a model is destroyed by an attack, any excess
                          damage inflicted by that attack is lost.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Advanced Rules</>,
                  level: 4,
                  tags: ["advanced", "core"],
                  children: [
                    {
                      text: <>Invulnerable Saves</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              <Rule>Invulnerable save</Rule>: Saving throw that
                              is never modified by attacking weapon’s AP.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              A model with an invulnerable save can use it
                              instead of its normal Sv
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: <>Mortal Wounds</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              Each mortal wound inflicted on a unit causes one
                              model in the unit to lose one wound.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              No saving throws can be made against mortal
                              wounds.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                        {
                          text: (
                            <>
                              Mortal wounds inflicted by attacks in addition to
                              normal damage always apply, even if normal damage
                              saved.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                    {
                      text: <>Ignoring Wounds</>,
                      level: 4,
                      tags: ["core"],
                      children: [
                        {
                          text: (
                            <>
                              A model can only use one rule to attempt to ignore
                              each wound suffered.
                            </>
                          ),
                          tags: ["core"],
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: <>Charge Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      The Charge phase is split into two steps. First you charge
                      with your units. Then your opponent performs Heroic
                      Interventions.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>1. Charges</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>2. Heroic Interventions</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>1. Charges</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: null,
                  tags: ["core"],
                  children: [
                    {
                      text: <>Select a unit from your army to charge with.</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Charge with that unit (see below).</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>Select another unit from your army to charge with.</>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Once all your units have charged, progress to the
                          Heroic Interventions step (pg 20).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Charging with a Unit</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>Declare targets of the charge (must be within 12").</>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <> Charge roll = 2D6".</>,
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If insufficient to move charging unit into Engagement
                          Range of all targets, charge fails.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If charge successful, models make their charge move.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Cannot make a charge move within Engagement Range of
                          any unit that was not the target of the charge.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: <>2. Heroic Interventions</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: null,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Select one <Keyword>Character</Keyword> unit to
                          perform a Heroic Intervention.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Cannot perform a Heroic Intervention if any enemy
                          units are in Engagement Range.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          {" "}
                          Must be an enemy unit within 3" horizontal and 5"
                          vertical to perform a Heroic Intervention.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Select another <Keyword>Character</Keyword> unit to
                          perform a Heroic Intervention.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Once all your <Keyword>Character</Keyword> units have
                          performed Heroic Interventions, progress to the Fight
                          phase (pg 21).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Performing a Heroic Intervention</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Heroic Intervention</Rule>: Move up to 3".
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: <>Must end closer to the closest enemy model.</>,
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: <>Advanced Rules</>,
              level: 4,
              tags: ["advanced", "core"],
              children: [
                {
                  text: <>Charging Over Terrain</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Models can make a move freely over terrain features 1"
                          or less in height.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Models cannot move through taller terrain features,
                          but can climb up and down them.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Flying when Charging</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Keyword>Fly</Keyword> models can move over other
                          models when they make a charge move.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          <Keyword>Fly</Keyword> models move over terrain
                          (including <Keyword>Buildings</Keyword>) like any
                          other model when they make a charge move.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Overwatch</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Overwatch</Rule>: Before charge roll made, all
                          charge targets that can fire Overwatch can do so.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Can never fire Overwatch while enemy units are in
                          Engagement Range.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          When firing Overwatch, shoot with unit, but attacks
                          only hit on unmodified 6s.{" "}
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: <>Fight Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      Starting with your opponent, alternate selecting units to
                      fight with.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      If one player has no more units left to fight with, their
                      opponent then fights with their remaining units, one at a
                      time.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: (
                    <>
                      Once all units have fought, progress to the Morale phase
                      (pg 23).
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Charging Units Fight First</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      Units that made a charge move this turn fight before all
                      other units.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Fight</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      When a unit fights, it piles in, then it makes close
                      combat attacks, then it consolidates.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Pile In</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Pile in</Rule>: Move up to 3".
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Must end closer to the closest enemy model.</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>Make Close Combat Attacks</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: <>Which Models Fight</>,
                  level: 5,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          A model can fight if it is in Engagement Range of an
                          enemy unit.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          {" "}
                          A model can fight if it is within ½" of another model
                          from their own unit that is within ½" of an enemy
                          unit.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Number of Attacks</>,
                  level: 5,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Number of attacks made by each model that can fight =
                          A.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Select Targets</>,
                  level: 5,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          If the attacking unit made a charge move this turn,
                          its models can only target units it declared a charge
                          against this turn, or units that performed a Heroic
                          Intervention this turn.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Select targets for all attacks, before any attacks are
                          resolved.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If a unit targets multiple units, all attacks against
                          one unit must be resolved before resolving attacks
                          against the next.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Select Weapons</>,
                  level: 5,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Each close combat attack is made with a melee weapon.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          A model makes attacks using the close combat weapon
                          profile if it has no other melee weapons.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If a unit attacks with multiple weapons, all attacks
                          made with weapons that have the same profile must be
                          resolved before resolving attacks with the next.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: <>Consolidate</>,
              level: 4,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      <Rule>Consolidate</Rule>: Move up to 3".
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>Must end closer to the closest enemy model.</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          text: <>Morale Phase</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: null,
              tags: ["core"],
              children: [
                {
                  text: (
                    <>
                      The Morale phase is split into two steps. First you take
                      Morale tests for your units. Then you remove any
                      out-ofcoherency models.
                    </>
                  ),
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>1. Morale Tests</>,
                  tags: ["core"],
                  children: [],
                },
                {
                  text: <>2. Unit Coherency Checks</>,
                  tags: ["core"],
                  children: [],
                },
              ],
            },
            {
              text: <>1. Morale Tests</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: null,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Players alternate taking Morale tests for units from
                          their army that have suffered casualties this turn.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If one player has no more units left to take Morale
                          tests, their opponent then takes Morale tests for
                          their remaining units, one at a time.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Once all units have taken Morale tests, progress to
                          the Unit Coherency Checks step (see opposite).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Morale Tests</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Morale test</Rule> = D6 + number of models
                          destroyed this turn.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Unmodified roll of 1 always a success (no models
                          flee).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          If Morale test exceeds unit’s Ld, one model flees and
                          other models must take Combat Attrition tests.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Combat Attrition Tests</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Combat Attrition tests</Rule>: Roll one D6 for
                          each remaining model in unit; for each 1, one
                          additional model flees.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Subtract 1 from Combat Attrition tests if unit is
                          below Half-strength.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: <>2. Unit Coherency Checks</>,
              level: 3,
              tags: ["core"],
              children: [
                {
                  text: null,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          Remove models from units in your army that are not in
                          unit coherency (pg 4).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Once all out of coherency models have been removed (if
                          any), the Morale phase ends.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          The player’s turn then ends and, unless the battle
                          ends, the next player’s turn begins (pg 9).
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: <>Missions</>,
          level: 2,
          tags: ["core"],
          children: [
            {
              text: <>Advanced Rules</>,
              level: 4,
              tags: ["advanced", "core"],
              children: [
                {
                  text: <>Objective Markers</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Objective marker</Rule>: 40mm round marker
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          {" "}
                          Model in range of objective marker if within 3"
                          horizontally and 5" vertically.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          Objective marker controlled by player with most models
                          in range.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                    {
                      text: (
                        <>
                          <Keyword>Aircraft</Keyword> and Fortifications cannot
                          control objective markers.
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
                {
                  text: <>Objective Secured</>,
                  level: 4,
                  tags: ["core"],
                  children: [
                    {
                      text: (
                        <>
                          <Rule>Objective Secured</Rule>: Player controls
                          objective marker if any of their models in range have
                          this ability
                        </>
                      ),
                      tags: ["core"],
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
