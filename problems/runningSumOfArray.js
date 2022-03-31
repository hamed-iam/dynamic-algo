// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// export const runningSum = (nums) => {
//   let ans = [];
//   nums.reduce((total, currentValue, currentIndex, arr) => {
//     return ans.push(total + currentValue);
//   }, 0);
//   return ans;
// };

export const runningSum = (nums) => {
  let sum = 0;
  return nums.map((num) => (sum += num));
};
