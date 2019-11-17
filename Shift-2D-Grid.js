/*
https://leetcode.com/problems/shift-2d-grid/
Given a 2D grid of size n * m and an integer k. You need to shift the grid k times.

In one shift operation:

    Element at grid[i][j] becomes at grid[i][j + 1].
    Element at grid[i][m - 1] becomes at grid[i + 1][0].
    Element at grid[n - 1][m - 1] becomes at grid[0][0].

Return the 2D grid after applying shift operation k times.
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  let copyGrid = [];
  for (let i = 0; i < grid.length; i++) {
    let copyRow = [];
    for (let j = 0; j < grid[i].length; j++) {
      copyRow.push(grid[i][j]);
    }
    copyGrid.push(copyRow);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let [kRow, kCol] = shiftIdx(grid, i, j, k);
      copyGrid[kRow][kCol] = grid[i][j];
    }
  }
  return copyGrid;
};

var shiftIdx = function(grid, row, col, shift) {
  let gridRow = grid.length;
  let gridCol = grid[0].length;

  col += shift;
  let addRow = Math.floor(col / gridCol);
  col = col % gridCol;
  row += addRow;
  row = row % gridRow;
  return [row, col];
};
