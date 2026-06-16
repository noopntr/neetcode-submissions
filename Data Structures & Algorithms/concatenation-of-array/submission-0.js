class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        if(nums.length === 0) return [] 

        const arr = [];

        for(let i = 0; i < 2; i++) {
            for(let num of nums) {
                arr.push(num)
            }
        }

        return arr
    }
}
