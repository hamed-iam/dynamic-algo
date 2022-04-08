// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

// export const isPalindrome = (x) => {
// 	return x.toString() === x.toString().split('').reverse().join('')
// };

export const isPalindrome = (x) => {
  let originalValue = x;

  if (x < 0) {
    return false;
  } else {
    let reverseNumber = 0;
    while (x > 0) {
      reverseNumber = reverseNumber * 10 + (x % 10);
      x = Math.floor(x / 10);
    }

    return reverseNumber === originalValue;
  }
};
