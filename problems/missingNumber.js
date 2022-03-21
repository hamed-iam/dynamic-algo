// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

export const missingNumber = (nums) => {
  let numArray = new Float64Array(nums);
  numArray = numArray.sort();
  for (let [index, num] of numArray.entries()) {
    if (index !== num) return index;
  }
  return numArray.length;
};
