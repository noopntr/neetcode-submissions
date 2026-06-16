class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  removeDuplicates(nums) {
    const unique = Array.from(new Set(nums)).sort((a, b) => a - b);
    for (let i = 0; i < unique.length; i++) {
      nums[i] = unique[i];
    }
    return unique.length;
  }
}
