// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} s
 * @return {string}
 */
export const sortSentence = (s) => {
  const ans = s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((str) => str.slice(0, -1));
  return ans.join(" ");
};
