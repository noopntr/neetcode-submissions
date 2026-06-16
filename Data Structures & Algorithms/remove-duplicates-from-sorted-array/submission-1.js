class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  removeDuplicates(nums) {
    let n = nums.length,
      l = 0,
      r = 0;

    while (r < n) {
      nums[l] = nums[r];
      while (r < n && nums[r] === nums[l]) {
        r++;
      }
      l++;
    }
    return l;
  }
}
