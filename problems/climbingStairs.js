// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */

export const climbStairs = (n) => {
  const countStairs = (stairsLeft, memo) => {
    if (stairsLeft < 0) return 0;
    if (stairsLeft === 0) return 1;
    if (memo[stairsLeft]) return memo[stairsLeft];

    memo[stairsLeft] =
      countStairs(stairsLeft - 1, memo) + countStairs(stairsLeft - 2, memo);

    return memo[stairsLeft];
  };

  return countStairs(n, {});
};
