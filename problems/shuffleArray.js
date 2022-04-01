// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

export const shuffle = (nums, n) => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }
  return ans;
};
