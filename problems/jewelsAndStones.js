// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
export const numJewelsInStones = (jewels, stones) => {
  const jewelsArr = jewels.split('');
  let ans = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelsArr.includes(stones[i])) {
      ans += 1;
    }
  }
  return ans;
};
