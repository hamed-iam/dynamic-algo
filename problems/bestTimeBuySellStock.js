// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 *
 * @param {number[]} prices
 * @return {number}
 */
// [7,1,5,3,6,4]
export const maxProfit = (prices) => {
  let minBuyPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > maxProfit) {
      maxProfit = price - minBuyPrice;
    }
  }
  return maxProfit;
};
