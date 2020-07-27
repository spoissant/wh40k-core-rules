// Regexp
// regex: \s?([^\n\r]*)
// list: {text:'$1',tags:[],children:[],},\n

export default {
    text: 'Warhammer 40,000 Core Rules',
    tags: [],
    children: [
        {
            text: 'Basic Rules',
            tags: [],
            children: [
                {
                    text: 'Army',
                    tags: [],
                    children: [
                        {
                            text: '',
                            tags: [],
                            children: [
                                {
                                    text: '**Army:** Collection of models under your command.',
                                    tags: [],
                                    children: [],
                                },
                            ],
                        },
                        {
                            text: 'Keywords',
                            tags: [],
                            children: [
                                {
                                    text: '**Keywords:** Appear in rules in **Keyword Bold** font.',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'Keyworded rules apply to units and models with that keyword',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: '**<Keywords>** are chosen by you when a unit is added to your army.',
                                    tags: [],
                                    children: [],
                                },
                            ],
                        },
                        {
                            text: 'Units',
                            tags: [],
                            children: [
                                {
                                    text: '**Unit:** A group of models from the same datasheet.',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'Friendly models = all models in the same army.',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'Enemy models = all models in your opponent\'s army',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'Enemy units = all units in opponent’s army',
                                    tags: [],
                                    children: [],
                                },
                            ],
                        },
                        {
                            text: 'Unit Coherency',
                            tags: [],
                            children: [
                                {
                                    text: '**Unit coherency:** 2" horizontally + 5" vertically.',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'Each model must be in unit coherency with one other model from own unit.',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'While unit has 6+ models, each model must be in unit coherency with 2 other models from own unit',
                                    tags: [],
                                    children: [],
                                },
                            ],
                        },
                        {
                            text: 'Engagement Range',
                            tags: [],
                            children: [
                                {
                                    text: '**Engagement Range:** 1" horizontally + 5" vertically',
                                    tags: [],
                                    children: [],
                                },
                                {
                                    text: 'Models cannot be set up within Engagement Range of enemy models.',
                                    tags: [],
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Measuring Distances',
                    tags: [],
                    children: [
                        {
                            text: '',
                            tags: [],
                            children: [
                                { text: 'Distances measured in inches (").', tags: [], children: [], },
                                { text: ' Always measure closest distance between bases(or hulls).', tags: [], children: [], },
                                { text: 'Hull = Any part of a model that does not have a base.', tags: [], children: [], },
                                { text: 'Can measure distances whenever you want.', tags: [], children: [], },
                                { text: 'If several units tied for closest, player resolving the ruleselects which is closest.', tags: [], children: [], },
                            ],
                        },
                        {
                            text: 'Within and Wholly Within',
                            tags: [],
                            children: [
                                { text: 'Model within = any part of model’s base (or hull).', tags: [], children: [], },
                                { text: ' Model wholly within = every part of model’s base (or hull).', tags: [], children: [], },
                                { text: 'Unit within = any model within.', tags: [], children: [], },
                                { text: 'Unit wholly within = every model wholly within', tags: [], children: [], },
                            ],
                        },
                    ],
                },
                {
                    text: 'Dice',
                    tags: [],
                    children: [
                        {
                            text: '',
                            tags: [],
                            children: [
                                { text: 'D6 = A six-sided dice.', tags: [], children: [], },
                                { text: 'D3 = D6 divided by 2 (rounding up).', tags: [], children: [], },
                                { text: 'All modifiers cumulative.', tags: [], children: [], },
                                { text: ' Apply modifiers in the following order: division,multiplication, addition, then subtraction.', tags: [], children: [], },
                                { text: ' Round fractions up after all modifiers have been applied.Dice roll cannot be modified to less than 1.', tags: [], children: [], },
                            ],
                        },
                        {
                            text: 'Re-Rolls',
                            tags: [],
                            children: [
                                { text: '**Re-roll:** Roll dice again.', tags: [], children: [], },
                                { text: 'Re-rolls are applied before modifiers (if any).', tags: [], children: [], },
                                { text: 'A dice can never be re-rolled more than once.', tags: [], children: [], },
                                { text: '**Unmodified dice:** Result of roll after re-rolls, but before modifiers (if any).', tags: [], children: [], },
                            ],
                        },
                        {
                            text: 'Roll-Offs',
                            tags: [],
                            children: [
                                { text: '**Roll-off:** Both players roll a D6 – highest wins.', tags: [], children: [], },
                                { text: 'Roll again if a tie.', tags: [], children: [], },
                            ],
                        },
                        {
                            text: 'Sequencing',
                            tags: [],
                            children: [
                                {
                                    text: 'If several rules must be resolved at the same time, the player whose turn it is chooses the order to resolve them.',
                                    tags: [],
                                    children: [],
                                },
                            ],
                        },
                        {
                            text: 'Starting Strength, Half-Strength and Destroyed Units',
                            tags: [],
                            children: [
                                { text: '**Starting Strength:** Number of models in unit when it is added to your army.', tags: [], children: [], },
                                { text: 'When a model is destroyed, remove it from the battlefield.', tags: [], children: [], },
                                { text: '**Below Half-strength:** Number of models in unit is less than half its Starting Strength.', tags: [], children: [], },
                                { text: 'When the last model in a unit is destroyed, the unit is said to be destroyed.', tags: [], children: [], },

                            ],
                        },
                    ],
                },
            ],
        },
        {
            text: 'Datasheet',
            tags: [],
            children: [
                {
                    text: 'Damage Tables',
                    tags: [],
                    children: [
                        {
                            text: '**Damage table:**  Model’s characteristics change as it loses wounds.',
                            tags: [],
                            children: [],
                        },
                    ],
                },
                {
                    text: 'Modifying Characteristics',
                    tags: [],
                    children: [
                        { text: 'All characteristic modifiers are cumulative.', tags: [], children: [], },
                        { text: 'Apply modifiers in the following order: division, multiplication, addition, then subtraction.', tags: [], children: [], },
                        { text: 'Round fractions up after applying all modifiers.', tags: [], children: [], },
                        { text: 'S, T, A and Ld can never be modified below 1.', tags: [], children: [], },
                        { text: 'Random Move characteristics determined for whole unit each time it moves.', tags: [], children: [], },
                        { text: 'Other random characteristics determined individually when characteristic required.', tags: [], children: [], },
                        { text: 'Characteristic of ‘-’ can never be modified.', tags: [], children: [], },

                    ],
                },
            ],
        },
        {
            text: 'The Battle Round',
            tags: [],
            children: [
                {
                    text: 'Out of Phase Rules',
                    tags: [],
                    children: [
                        { text: 'When resolving an out of phase rule, all rules that normally apply in that phase continue to apply.', tags: [], children: [], },
                        { text: 'Phase-specific Stratagems cannot be used when resolving out of phase rules.', tags: [], children: [], },
                    ],
                },
                {
                    text: 'Command Phase',
                    tags: [],
                    children: [
                        { text: 'Battle-forged CP bonus: Gain 1 CP if army is Battleforged.', tags: [], children: [], },
                        { text: 'Resolve any rules that occur in the Command phase. Progress to the Movement phase (pg 10).', tags: [], children: [], },
                    ],
                },
                {
                    text: 'Movement Phase',
                    tags: [],
                    children: [
                        {
                            text: '',
                            tags: [],
                            children: [
                                { text: 'The Movement phase is split into two steps. First you move your units. Then you can set up Reinforcements that have not yet arrived.', tags: [], children: [], },
                                { text: '1\\. Move Units', tags: [], children: [], },
                                { text: '2\\. Reinforcements', tags: [], children: [], },
                            ],
                        },
                        {
                            text: '1\\. Move Units',
                            tags: [],
                            children: [
                                {
                                    text: '',
                                    tags: [],
                                    children: [
                                        { text: 'Select a unit in your army to move.', tags: [], children: [], },
                                        { text: 'When a unit moves it can either make a Normal Move, Advance or Remain Stationary.', tags: [], children: [], },
                                        { text: 'Units that are within Engagement Range of any enemy models can only either Fall Back or Remain Stationary.', tags: [], children: [], },
                                        { text: 'Select another unit in your army to move.', tags: [], children: [], },
                                        { text: 'Once all your units have moved, progress to the Reinforcements step (pg 11).', tags: [], children: [], },
                                    ],
                                },
                                {
                                    text: 'Normal Move',
                                    tags: [],
                                    children: [
                                        { text: '**Normal Move:** Models move up to M".', tags: [], children: [], },
                                        { text: 'Cannot move within Engagement Range of any enemy models.', tags: [], children: [], },
                                    ],
                                },
                                {
                                    text: 'Advance',
                                    tags: [],
                                    children: [
                                        { text: '**Advance:** Models move up to M+D6".', tags: [], children: [], },
                                        { text: 'Cannot move within Engagement Range of enemy models.', tags: [], children: [], },
                                        { text: 'Units that Advance cannot shoot or charge this turn', tags: [], children: [], },
                                    ],
                                },
                                {
                                    text: 'Remain Stationary',
                                    tags: [],
                                    children: [
                                        { text: '**Remain Stationary:** Models cannot move this phase.', tags: [], children: [], },
                                    ],
                                },
                                {
                                    text: 'Fall Back',
                                    tags: [],
                                    children: [
                                        { text: 'Fall Back: Models move up to M".', tags: [], children: [], },
                                        { text: 'Units that Fall Back cannot charge this turn.', tags: [], children: [], },
                                        { text: 'Units that Fall Back cannot shoot or manifest psychic powers this turn unless they are Titanic.', tags: [], children: [], },
                                    ],
                                },
                            ],
                        },
                        {
                            text: '2\\. Reinforcements',
                            tags: [],
                            children: [
                                { text: '**Reinforcement unit:** Unit that starts the battle in a location other than the battlefield.', tags: [], children: [], },
                                { text: 'Set up your Reinforcement units, one at a time, as described by the rules that let them start the battle in locations other than the battlefield.', tags: [], children: [], },
                                { text: 'Reinforcement units cannot make a Normal Move, an Advance, Fall Back or Remain Stationary this turn.', tags: [], children: [], },
                                { text: 'Reinforcement units always count as having moved this turn.', tags: [], children: [], },
                                { text: 'Any Reinforcement unit not set up on the battlefield by the end of the battle counts as destroyed.', tags: [], children: [], },
                                { text: 'Once all your Reinforcement units have been set up, progress to the Psychic phase (pg 14).', tags: [], children: [], },

                            ],
                        },
                        {
                            text: 'Advanced Rules',
                            tags: [],
                            children: [
                                {
                                    text: 'Moving Over Terrain',
                                    tags: [],
                                    children: [
                                        { text: 'Models can move freely over terrain features 1" or less in height.', tags: [], children: [], },
                                        { text: 'Models cannot move through taller terrain features, but can climb up and down them.', tags: [], children: [], },
                                    ],
                                },
                                {
                                    text: 'Flying',
                                    tags: [],
                                    children: [
                                        { text: '**Fly** models can move over other models when they make a Normal Move, an Advance or when they Fall Back.', tags: [], children: [], },
                                        { text: '**Fly** models ignore vertical distances when they make a Normal Move, an Advance or when they Fall Back.', tags: [], children: [], },
                                    ],
                                },
                                {
                                    text: 'Transports',
                                    tags: [],
                                    children: [
                                        {
                                            text: 'Transport Capacity',
                                            tags: [],
                                            children: [
                                                { text: '**Transport capacity:** Maximum number of models that can embark within the **Transport**.', tags: [], children: [], },
                                                { text: 'Units can start the battle embarked in a **Transport**.', tags: [], children: [], },
                                            ],
                                        },
                                        {
                                            text: 'Embark',
                                            tags: [],
                                            children: [
                                                { text: 'Units can embark in a friendly **Transport** if every model ends a Normal Move, an Advance or a Fall Back within 3" of it.', tags: [], children: [], },
                                                { text: 'A unit cannot embark within a **Transport** that is within Engagement Range of any enemy models.', tags: [], children: [], },
                                                { text: 'A unit cannot embark and disembark in the same phase.', tags: [], children: [], },
                                                { text: 'Units cannot do anything, or be affected in any way, while they are embarked within a **Transport**.', tags: [], children: [], },
                                            ],
                                        },
                                        {
                                            text: 'Disembark',
                                            tags: [],
                                            children: [
                                                { text: 'Units that start their Movement phase embarked in a **Transport** can disembark this phase.', tags: [], children: [], },
                                                { text: 'A unit must disembark before their **Transport** moves.', tags: [], children: [], },
                                                { text: 'Disembarking units must be set up wholly within 3" of their **Transport** and not within Engagement Range of any enemy models.', tags: [], children: [], },
                                                { text: 'Units that have disembarked count as having moved this turn.', tags: [], children: [], },
                                            ],
                                        },
                                        {
                                            text: 'Destroyed Transports',
                                            tags: [],
                                            children: [
                                                { text: 'If a **Transport** is destroyed, resolve its Explodes ability (if it has one).', tags: [], children: [], },
                                                { text: 'Any units embarked within must then disembark.', tags: [], children: [], },
                                                { text: 'Roll one D6 for each model that disembarked; for each 1, one model is destroyed.', tags: [], children: [], },
                                                { text: 'Units that disembarked cannot charge or perform Heroic Interventions this turn.', tags: [], children: [], },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    text: 'Aircraft',
                                    tags: [],
                                    children: [
                                        {
                                            text: 'Minimum Move',
                                            tags: [],
                                            children: [
                                                { text: '**Minimum move:** Models must move at least their minimum M".', tags: [], children: [], },
                                                { text: 'If a model cannot make its minimum move, it is destroyed (unless you are using Strategic Reserves).', tags: [], children: [], },
                                            ],
                                        },
                                        {
                                            text: 'Aircraft Egagement Range',
                                            tags: [],
                                            children: [
                                                { text: 'Models can move within an enemy **Aircraft**’s Engagement Range.', tags: [], children: [], },
                                                { text: 'Models can move over **Aircraft** (and their bases) when they make any kind of move.', tags: [], children: [], },
                                                { text: '**Aircraft** can make a Normal Move or an Advance even when within Engagement Range of enemy models.', tags: [], children: [], },
                                                { text: 'Units can make a Normal Move or an Advance if they are only within Engagement Range of enemy **Aircraft**', tags: [], children: [], },

                                            ],
                                        },
                                        {
                                            text: 'Heroic Interventations, Pile Ins, Consolidations and Aircrafts',
                                            tags: [],
                                            children: [
                                                {text:'When a model performs a Heroic Intervention, piles in or consolidates, ignore **Aircraft** (unless the model moving can **Fly**).',tags:[],children:[],},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Psychic Phase',
                    tags: [],
                    children: [

                    ],
                },
                {
                    text: 'Shooting Phase',
                    tags: [],
                    children: [

                    ],
                },
                {
                    text: 'Charge Phase',
                    tags: [],
                    children: [

                    ],
                },
                {
                    text: 'Fight Phase',
                    tags: [],
                    children: [

                    ],
                },
                {
                    text: 'Morale Phase',
                    tags: [],
                    children: [

                    ],
                },
            ],
        },
    ]
}