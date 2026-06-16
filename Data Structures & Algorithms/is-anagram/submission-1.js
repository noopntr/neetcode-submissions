class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArray = s.split('');
        let tArray = t.split('');
        sArray.sort()
        tArray.sort()
        const sortedS = sArray.join('');
        const sortedT = tArray.join('');

        if(sortedS !== sortedT) {
            return false
        }

        return true

    }
}
