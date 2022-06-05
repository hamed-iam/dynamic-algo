/**
 * @param {number} num
 * @return {number}
 */
export const numberOfSteps = (num, steps = 0) => {
  if (num == 0) return steps;
  if (num % 2 == 0) {
    steps++;
    return numberOfSteps(num / 2, steps);
  } else {
    steps++;
    return numberOfSteps(num - 1, steps);
  }
};
