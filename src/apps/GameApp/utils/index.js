export const sumScore = (score) =>
  [...score.primaries, ...score.secondaries].reduce((acc, val) => acc + val);
