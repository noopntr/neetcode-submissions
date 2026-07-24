class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix(strs: string[]): string {
    for (let i = 0; i < strs[0].length; i++) {
      for (let s of strs) {
        if (i === s.length || s[i] !== strs[0][i]) {
          return s.slice(0, i);
        }
      }
    }

    return strs[0];
  }
}
