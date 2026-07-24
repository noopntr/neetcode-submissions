class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
      const count = new Map()
      let res: number = 0, maxCount = 0;

      for(let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        if(count.get(num) > maxCount) {
          res = num;
          maxCount = count.get(num)
        }
      }

      return res
    }
}
