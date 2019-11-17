/*
https://leetcode.com/problems/number-of-islands/
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let num = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let current = grid[i][j];
      if (current === '1') {
        num++;
        helper(grid, i, j);
      }
    }
  }
  return num;
};
//initialize a island variable
//we'll iterate over every el in matrix looking for 1's.
//if we find one, increment island and call helper function

var helper = function(grid, row, col) {
  if (row < 0 || row >= grid.length) return;
  if (col < 0 || col >= grid[0].length) return;
  if (grid[row][col] === '0') return;

  grid[row][col] = '0';
  helper(grid, row + 1, col);
  helper(grid, row - 1, col);
  helper(grid, row, col + 1);
  helper(grid, row, col - 1);
};
//helper function
//does DFS and if in bounds and current is a 1, keep recursing
