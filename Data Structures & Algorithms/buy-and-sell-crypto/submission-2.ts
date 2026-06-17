class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let profit: number = 0;
    let l: number = 0,
      r: number = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        let maxNum: number = 0;
        maxNum = prices[r] - prices[l];
        profit = Math.max(profit, maxNum);
      } else {
        l = r;
      }

      r++;
    }

    return profit;
  }
}
