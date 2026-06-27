class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const count = {};
    for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
    }

    const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
    arr.sort((a: number[], b: number[]) => b[0] - a[0]);

    return arr.slice(0, k).map((pair: number[]) => pair[1]);
  }
}
