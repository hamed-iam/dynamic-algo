// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

export const romanToInt = (s) => {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = roman[s.charAt(i)];
    let nextInt = roman[s.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) total += currentInt;
      else {
        total += nextInt - currentInt;
        i++;
      }
    } else total += currentInt;
  }
  return total;
};
