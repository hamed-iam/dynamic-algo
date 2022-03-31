// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */

export const maximumWealth = (accounts) => {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    max = Math.max(
      max,
      accounts[i].reduce((a, b) => a + b)
    );
  }
  return max;
};
