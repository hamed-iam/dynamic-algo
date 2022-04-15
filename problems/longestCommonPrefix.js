// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = (strs) => {
  let firstWord = strs[0];
  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (firstWord[i] === strs[j][i]) continue;
      return firstWord.slice(0, i);
    }
  }
  return firstWord;
};
