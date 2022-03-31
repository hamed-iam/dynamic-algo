// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
/**
 * @param {string[]} operations
 * @return {number}
 */
export const finalValueAfterOperations = (operations) => {
  let value = 0;
  for (let op of operations) {
    if (op === '--X' || op === 'X--') value--;
    else value++;
  }
  return value;
};
