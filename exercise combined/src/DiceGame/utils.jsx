function getRolls(n) {
  // .from() creates a new copy from an iterable.
  // given {length: n} => run rand() nth time
  return Array.from({ length: n }, () => rand());
}

function rand() {
  return Math.floor(Math.random() * 6) + 1;
}

function sum(nums) {
  // .reduce() return 1 value base on the callback function and initialValue (e.g. here give 0)
  return nums.reduce((prev, cur) => prev + cur, 0);
}

function lessThanFour(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((val) => val === dice[0]);
}

// when export many function => JUST "export", NO "default"
export { getRolls, lessThanFour, allSameValue };