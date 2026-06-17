class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: Set<string> = new Set();

    for (let i: number = 0; i < nums.length; i++) {
      for (let j: number = i + 1; j < nums.length; j++) {
        for (let k: number = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
          }
        }
      }
    }

    return Array.from(res).map((item) => JSON.parse(item));
  }
}
