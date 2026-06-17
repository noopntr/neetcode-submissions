class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let profit: number = 0;

    for (let i: number = 0; i < prices.length; i++) {
      let buy: number = prices[i];
      for (let j: number = i + 1; j < prices.length; j++) {
        let sell: number = prices[j];
        profit = Math.max(profit, sell - buy);
      }
    }

    return profit;
  }
}
