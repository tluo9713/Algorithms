/**
 * https://leetcode.com/problems/unique-paths/
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
 */

/* *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let memo = [];
  for (let i = 0; i < n; i++) {
    memo.push(new Array(m).fill(0));
  }
  memo[0][0] = 1;
  for (let i = 0; i < memo.length; i++) {
    for (let j = 0; j < memo[i].length; j++) {
      let top = memo[i - 1] ? memo[i - 1][j] : 0;
      let left = memo[i][j - 1] || 0;
      if (i !== 0 || j !== 0) memo[i][j] = top + left;
    }
  }
  return memo[n - 1][m - 1];
};
