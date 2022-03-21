/**
 * @param {number[]} nums
 * @return {number[]}
 */

export const productExceptSelf = (nums) => {
  let arr = [];
  for (let [index, num] of nums.entries()) {
    console.log(index, '==>', num);
    if (index !== num[index]) {
	    arr.push()
    }
  }
};
