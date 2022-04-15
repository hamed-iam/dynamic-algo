// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = (s) => {
  const opening_pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const closing_pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const openings = [];
  for (let char of s) {
    if (opening_pairs[char]) {
      // opening
      openings.push(char);
    } else {
      // closing
      if (closing_pairs[char] === openings[openings.length - 1]) {
        // closed, pop from stack
        openings.pop();
      } else {
        // closing a not opened bracket, invalid!
        return false;
      }
    }
  }

  return openings.length === 0;
};
