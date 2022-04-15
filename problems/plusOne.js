// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// ! this solution is correct as long as number is not larger than 1_000_000_000_000_000 otherwise it will overflow
// export const plusOne = (digits) => {
//   let str = '';
//   for (let i = 0; i < digits.length; i++) {
//     str = str + digits[i];
//   }
//   let ans = Number(str) + 1;
//   return Array.from(String(ans), Number);
// };

export const plusOne = (digits) => {
  let ans = BigInt(digits.join(''));
  ans++;
  return Array.from(ans.toString()).join().split(',').map(Number);
};
