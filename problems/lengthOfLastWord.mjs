// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = (s) => s.split(' ').at(-1).length;
