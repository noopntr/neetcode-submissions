class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = new Set(nums)
        
        if(arr.size === nums.length) {
            return false
        }

        return true
    }
}
