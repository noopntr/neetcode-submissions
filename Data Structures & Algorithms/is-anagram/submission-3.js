class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    if (sortedS === sortedT) {
      return true;
    }

    return false;
  }
}
