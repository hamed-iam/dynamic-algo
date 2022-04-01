// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */

export const numIdenticalPairs = (nums) => {
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) ans++;
    }
  }
  return ans;
};
