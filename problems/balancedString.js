// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
export const balancedStringSplit = (s) => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") sum += 1;
    else sum -= 1;
    if (sum == 0) count += 1;
  }
  return count;
};
