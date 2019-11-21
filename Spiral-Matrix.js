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
  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];
  let unvisited = [];
  for (let i = 0; i < matrix.length; i++) {
    unvisited.push(new Array(matrix[0].length).fill(true));
  }
  let pr = 0;
  let pc = 0;
  let direction = 0;
  arr.push(matrix[0][0]);
  unvisited[0][0] = false;
  while (arr.length < limit) {
    if (
      matrix[pr + dr[direction]] &&
      unvisited[pr + dr[direction]][pc + dc[direction]]
    ) {
      pr += dr[direction];
      pc += dc[direction];
      arr.push(matrix[pr][pc]);
      unvisited[pr][pc] = false;
    } else {
      direction = (direction + 1) % 4;
    }
  }
  return arr;
};
