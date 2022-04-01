// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

export const smallerNumbersThanCurrent = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let k = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        k++;
      }
    }
    ans.push(k);
  }
  return ans;
};
