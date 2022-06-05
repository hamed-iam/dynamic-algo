// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */
export const minimumSum = (num) => {
  const arr = num.toString().split("");
  arr.sort((a, b) => a - b);
  let num1 = "" + arr[0] + arr[2];
  let num2 = "" + arr[1] + arr[3];
  let minSum = +num1 + +num2;
  return minSum;
};
