/**
 * @param {number[]} nums
 * @return {number}
 */

// ! fast solution
export const singleNumber = (nums) => {
  return nums.reduce(
    (previousValue, currentValue) => previousValue ^ currentValue
  );
};

// ! not fast enough
// export const singleNumber = (nums) => {
//   let set = new Set();
//   for (let num of nums) {
//     if (set.has(num)) set.delete(num);
//     else set.add(num);
//   }
//   return Array.from(set)[0];
// };
