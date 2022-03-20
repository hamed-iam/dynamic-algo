// https://leetcode.com/problems/contains-duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// ! runtime of this solution is 122ms and memory is 50.9mb
export const betterContainsDuplicate = (nums) => {
  let numbers = new Set();
  for (let num of nums) {
    if (!numbers.has(num)) numbers.add(num);
    else return true;
  }
  return false;
};

// ! run time of this function is 155ms and memory of 51.5mb
export const containsDuplicate = (nums) => {
  let temp = {};
  for (let num of nums) {
    if (temp[num] == undefined) temp[num] = num;
    else return true;
  }
  return false;
};
