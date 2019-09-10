//https://leetcode.com/problems/toeplitz-matrix/

//A matrix is Toeplitz if every diagonal from top-left to bottom-right has the
//same element.

//Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

// /**
//  * @param {number[][]} matrix
//  * @return {boolean}
//  */

//This problem is fairly straight forward, you just have to make sure the logic
//is sound. First, I implemented a helper function that given a matrix and a
//starting element, will check if every element in it's diagonal is the same
//element. If so, return true, else return false.
//To not overlap, we just use the helper function on every possible start point
//for diagonals, which will be the 0th index rows in the matrix and the 0th
//index for columns.
//Since we have to iterate through every element at least once, this is O(n)
//where n is the size of the element
var isToeplitzMatrix = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (!helper(matrix, i, 0)) return false;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (!helper(matrix, 0, i)) return false;
  }
  return true;
};

var helper = function(matrix, i, j) {
  let num = matrix[i][j];
  while (matrix[i] !== undefined && matrix[i][j] !== undefined) {
    if (matrix[i][j] !== num) {
      return false;
    }
    i++;
    j++;
  }
  return true;
};
