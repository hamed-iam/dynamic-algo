//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// [2,3,5,1,3],3
export const kidsWithCandies = (candies, extraCandies) => {
  let maxCandies = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandies);
};
