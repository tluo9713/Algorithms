//https://www.algoexpert.io/questions/River%20Sizes

//You are given a two-dimensional array (matrix) of potentially unequal height
//and width containing only 0s and 1s. Each 0 represents land, and each 1
//represents part of a river. A river consists of any number of 1s that are
//either horizontally or vertically adjacent (but not diagonally adjacent). The
//number of adjacent 1s forming a river determine its size. Write a function
//that returns an array of the sizes of all rivers represented in the input
//matrix. Note that these sizes do not need to be in any particular order.

//There are different ways approaching this problem. You can either manipulate
//the original matrix or not. You can solve this recursively or iteratively. For
//my solution, I will be editing the original array and solving it recursively.
//First we have to traverse through entire matrix to find a river. If we find
//a river, we then use our helper function which will return the size of the
//river. What the helper function will do is check if it's a valid spot (not
//out of bounds, and value is 1 which is a river). If so, the size will start at
//1. You then edit the matrix so the current position is a 0 so we don't double
//count our river. And then you check up, down, left and right for continuing
//river sizes. You add up all the river and return it and you'll have your river
//size. Then we'll push it into our array and continue.
//Time complexity will be O(wh) where w is the width of the matrix and h is the
//height of the matrix. This is because we'll have to traverse the matrix at
//least once. You may be concerned that it's worse because you need to call a
//helper function, but the helper function will only be called if there is a
//river. Afterwards, since we edit the matrix so it'll ignore previous rivers
//you'll never really traverse the matrix more than twice. Space complexity is
//O(wh) because if the entire matrix is a river, we'll have a call stack that is
//wh high. It's worth noting that recursive solution is fairly simple. A
//weakness of recursive solution is that most JS engines will not be able to
//exceed a callstack size of 10,000. Meaning if there was a matrix that had more
//than 10,000 elements, this solution wouldn't work. An alternative solution
//would be to use a queue to check river sizes. This way you can check a matrix
//that's size is larger than 10,000 elements.

function riverSizes(matrix) {
  let sizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        let individualSize = helper(matrix, i, j);
        sizes.push(individualSize);
      }
    }
  }

  return sizes;
}

function helper(matrix, row, col) {
  if (
    matrix[row] === undefined ||
    matrix[row][col] === undefined ||
    matrix[row][col] === 0
  )
    return 0;
  matrix[row][col] = 0;
  let count = 1;
  let up = helper(matrix, row - 1, col);
  let down = helper(matrix, row + 1, col);
  let left = helper(matrix, row, col - 1);
  let right = helper(matrix, row, col + 1);

  return count + up + down + left + right;
}
