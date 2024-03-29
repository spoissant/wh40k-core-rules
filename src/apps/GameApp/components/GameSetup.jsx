import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const GameSetup = ({ next }) => {
  return (
    <>
      <h1>Game Setup</h1>
      <h2>10. Declare Reserves and Transports</h2>
      <Box>These missions use the Strategic Reserves rules (pg 256).</Box>
      <Box>
        Both players now secretly note down on their army roster which of the
        units in their army will start the battle in Strategic Reserves, which
        of their units will start the battle in a location other than the
        battlefield (if a player has access to any Stratagems that enable them
        to set up 281units from their army in a location other than the
        battlefield, they must use such Stratagems now), and which of their
        units will start the battle embarked within TRANSPORT models (they must
        declare what units are embarked on what model). When both players have
        done so, they declare their selections to their opponent.
      </Box>
      <Box>
        No more than half the total number of units in your army can be
        Strategic Reserve and/ or Reinforcement units, and the combined points
        value of all your Strategic Reserve and Reinforcement units (including
        those embarked within TRANSPORT models that are Strategic Reserve and/or
        Reinforcement units) must be less than half of your army’s total points
        value, even if every unit in your army has an ability that would allow
        them to be set up elsewhere.
      </Box>
      <Box>
        In Eternal War missions, Strategic Reserve and Reinforcement units can
        never arrive on the battlefield in the first battle round. Any Strategic
        Reserve or Reinforcement unit that has not arrived on the battlefield by
        the end of the third battle round counts as having been destroyed, as do
        any units embarked within them (this does not apply to units that are
        placed into Strategic Reserves after the first battle round has
        started).
      </Box>
      <h2>11. Deploy Armies</h2>
      <Box>
        The players alternate setting up their remaining units, one at a time,
        starting with the Defender. A player must deploy all of the their
        remaining units with the Fortifications battlefield role before
        deploying any other unit. A player's models must be set up whilly within
        their deployment zone. If one player finishes deploying all their units,
        their opponent then deploys the remainder of their units.
      </Box>
      <Box>
        Unless ptherwise stated, when setting up a model from a unit with the
        Fortifications battlefield role on the battelfield, it canont be set up
        within 3" of any other terrain feature that is not part of tiws own
        datasheet (excluding hills). If it is not possible to set up a
        Fortification as a result, a player can, in a War Zone Nachmund: Grand
        Tournament missino, remove one Obstacles or Area Terrain feature that is
        within their deployment zone from the battlefield in order to make room
        for their Fortification. If, by doing so, it is still not possible to
        set up their Fortification, replace the terrain fetaure removed - this
        Fortification cannot be deployed and counts as having been destroyed.
      </Box>
      <Box>
        If a model from your army is so large that it cannot physically be set
        up wholly within your deployment zone (i.e. the smallest dimension of
        that model is greater than the depth of your deployment zone), it must
        be set up so that it is touching your battlefield edge. In the first
        battle round, that model's unit cannot do any of the following: make a
        Normal Move, Advance, Fall Back, attempt to manifest or deny psychic
        powers, make any attacks with ranged weapons, declare a charge, perform
        a Heroic Intervention, perform any actions or psychic actions. Models in
        such units count as having moved a distance in inches equal to their
        Move (M) characteristic in their first Movement phase. If the unit has a
        minimum Move characteristic, it counts as having moved its maximum Move
        characteristic.
      </Box>
      <Box>
        If both players have units with abilities that allow them to be set up
        ‘after both armies have deployed; the players must roll off after all
        other units have been set up and alternate setting up these units,
        starting with the winner.
      </Box>
      <h2>12. Determine First Turn</h2>
      <Box>The players roll off. The winner takes the first turn.</Box>
      <h2>13. Resolve Pre-Battle Abilities</h2>
      <Box>
        The players alternate resolving any pre-battle abilities units from
        their army may have, and resolving any Stratagems that are used before
        the battle (excluding those that upgrade their units or those that
        enable them to set up a unit in a location other than the battlefield),
        starting with the player who will take the first turn.
      </Box>
      <Button variant="contained" color="primary" onClick={next}>
        Continue
      </Button>
    </>
  );
};

export default GameSetup;
