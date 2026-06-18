class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    const arr: Set<number> = new Set(nums);

    if (arr.size === nums.length) {
      return false;
    }

    return true;
  }
}
