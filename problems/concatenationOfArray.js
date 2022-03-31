// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getConcatenation = (nums) => {
  let ans = [...nums];
  for (let num of nums) {
    ans.push(num);
  }
  return ans;
};
