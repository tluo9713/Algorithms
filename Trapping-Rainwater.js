/**
 * https://leetcode.com/problems/trapping-rain-water/
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 */

/* *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftMax = [];
  let rightMax = [];
  for (let i = 0; i < height.length; i++) {
    let curr = height[i];
    if (leftMax.length === 0) leftMax.push(curr);
    else {
      let prevMax = leftMax[leftMax.length - 1];
      let max = Math.max(prevMax, curr);
      leftMax.push(max);
    }
  }
  for (let i = height.length - 1; i >= 0; i--) {
    let curr = height[i];
    if (rightMax.length === 0) rightMax.push(curr);
    else {
      let prevMax = rightMax[rightMax.length - 1];
      let max = Math.max(prevMax, curr);
      rightMax.push(max);
    }
  }
  rightMax.reverse();
  let area = 0;
  for (let i = 0; i < height.length; i++) {
    let curr = height[i];
    let min = Math.min(leftMax[i], rightMax[i]);
    let water = Math.max(0, min - curr);
    area += water;
  }
  return area;
};
