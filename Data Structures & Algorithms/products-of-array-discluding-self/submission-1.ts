class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const res: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
      let prev: number = 1;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          prev *= nums[j];
        }
      }
      res[i] = prev;
    }

    return res;
  }
}
