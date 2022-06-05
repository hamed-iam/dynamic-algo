// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/**
 * @param {number} n
 * @return {number}
 */

export const subtractProductAndSum = (n) => {
  const numArray = n.toString().split("");
  let sum = 0;
  let product = 1;
  for (let num of numArray) {
    product = +num * product;
    sum = +num + sum;
  }
  return product - sum;
};
