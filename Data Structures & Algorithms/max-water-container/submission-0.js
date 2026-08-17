class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let n = heights.length,
      r = n - 1,
      l = 0,
      max_area = 0;

    while (l < r) {
      let w = r - l;
      let h = Math.min(heights[l], heights[r]);
      let a = w * h;
      max_area = Math.max(max_area, a);

      if (heights[l] < heights[r]) {
        l += 1;
      } else {
        r -= 1;
      }
    }

    return max_area;
  }
}
