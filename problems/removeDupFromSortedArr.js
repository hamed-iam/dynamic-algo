// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = (nums) => {
  let j = 1;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j += 1;
    }
  }
  return j;
};
