// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
export const mostWordsFound = (sentences) => {
  let max = 0;
  for (let sentence of sentences) {
    let count = sentence.split(' ').length;
    max = Math.max(max, count);
  }
  return max;
};
