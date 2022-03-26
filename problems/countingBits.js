// https://leetcode.com/problems/counting-bits

/**
 * @param {number} n
 * @return {number[]}
 */

// ! this is a kinda tough problem. code is easy but concept is somewhat tricky (draw to understand)
export const countBits = (n) => {
  let dp = [0];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = 1 + dp[i - 1];
    }
  }
  return dp;
};
