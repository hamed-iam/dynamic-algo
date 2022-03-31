// https://leetcode.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const buildArray = (nums) => nums.map((el, _, arr) => arr[el]);
