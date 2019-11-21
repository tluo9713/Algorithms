/*
https://leetcode.com/problems/spiral-matrix/
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let limit = matrix.length * matrix[0].length;
  let arr = [];
  let dRow = [0, 1, 0, -1];
  let dCol = [1, 0, -1, 0];
  let unvisited = matrix.map(row => new Array(row.length).fill(true));
  let currRow = 0;
  let currCol = -1;
  let direction = 0;
  while (arr.length < limit) {
    let nextRow = currRow + dRow[direction];
    let nextCol = currCol + dCol[direction];
    if (matrix[nextRow] && unvisited[nextRow][nextCol]) {
      arr.push(matrix[nextRow][nextCol]);
      currRow = nextRow;
      currCol = nextCol;
      unvisited[currRow][currCol] = false;
    } else direction = (direction + 1) % 4;
  }
  return arr;
};
