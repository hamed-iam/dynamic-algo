/**
 * @param {number[]} nums
 * @return {number[]}
 */

// ! very slow but simple
// export const findDisappearedNumbers = (nums) => {
//   let missingNums = [];
//   for (let i = 1; i < nums.length + 1; i++) {
//     if (!nums.includes(i)) missingNums.push(i);
//   }
//   return missingNums;
// };

// ! fast but I would rather pass just once
export const findDisappearedNumbers = (nums) => {
  let missingNums = [];
  console.log('nums :>> ', nums);
  for (let i = 0; i < nums.length; i++) {
    let k = Math.abs(nums[i]) - 1;
    nums[k] = Math.abs(nums[k]) * -1;
  }
  console.log('nums2 :>> ', nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missingNums.push(i + 1);
    }
  }
  return missingNums;
};

// ! I could not complete this approach
// export const findDisappearedNumbers = (nums) => {
//   // ? for removing duplicate values
//   const uniqArr = [...new Set(new Float64Array(nums).sort())];
//   let missingNums = [];
//   for (let [index, num] of uniqArr.entries()) {
//     if (index + 1 !== num) missingNums.push(index + 1);
//   }
//   if (uniqArr.length == 1 && uniqArr[0] == 1) return [nums.length];
//   return missingNums;
// };
