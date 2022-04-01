// https://leetcode.com/problems/decode-xored-array/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
export const decode = function (encoded, first) {
  let ans = [first];
  for (let i = 0; i < encoded.length; i++) {
    ans.push(encoded[i] ^ ans[ans.length - 1]);
  }
  return ans;
};
