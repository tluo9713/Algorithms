//https://leetcode.com/problems/candy-crush/

//This question is about implementing a basic elimination algorithm for Candy Crush.

//Given a 2D integer array board representing the grid of candy, different
//positive integers board[i][j] represent different types of candies. A value of
//board[i][j] = 0 represents that the cell at position (i, j) is empty. The
//given board represents the state of the game following the player's move. Now,
//you need to restore the board to a stable state by crushing candies according
//to the following rules:

//If three or more candies of the same type are adjacent vertically or
//horizontally, "crush" them all at the same time - these positions become
//empty.After crushing all candies simultaneously, if an empty space on the
//board has candies on top of itself, then these candies will drop until they
//hit a candy or bottom at the same time. (No new candies will drop outside the
//top boundary.)
//After the above steps, there may exist more candies that can be crushed. If so,
//you need to repeat the above steps.
//If there does not exist more candies that can be crushed (ie. the board is
//stable), then return the current board.
//You need to perform the above rules until the board becomes stable, then
//return the current board.

/* *
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  let runCrushFunction = true;

  while (runCrushFunction) {
    //create a mask
    // let mask = new Array(board.length);
    // for (let i = 0; i < mask.length; i++) {
    //   mask[i] = new Array(board[i].length).fill(false);
    // }
    let crushMatrix = new Array(board.length);
    for (let i = 0; i < crushMatrix.length; i++) {
      crushMatrix[i] = new Array(board[i].length).fill(false);
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let el = board[i][j];
        if (el === 0) continue;
        let left = checkNext(board, el, i, j, 'left');
        let down = checkNext(board, el, i, j, 'down');
        if (left >= 3) {
          markDirection(board, crushMatrix, el, i, j, 'left');
        }
        if (down >= 3) {
          markDirection(board, crushMatrix, el, i, j, 'down');
        }
      }
    }
    crush(board, crushMatrix);
    //update board state
    runCrushFunction = nextBoard(board);
  }
  return board;
};

var checkNext = function(board, element, row, col, direction) {
  //if the row is out of bounds, or we seen the rol/col, or if it's not equal to
  //element, then we reached base case and return 0
  if (!board[row] || board[row][col] !== element) return 0;

  if (direction === 'left') col++;
  if (direction === 'down') row++;
  return 1 + checkNext(board, element, row, col, direction);
};

var markDirection = function(board, crushMatrix, element, row, col, direction) {
  if (!board[row] || board[row][col] !== element) return;
  crushMatrix[row][col] = true;
  if (direction === 'left') col++;
  if (direction === 'down') row++;
  markDirection(board, crushMatrix, element, row, col, direction);
};

var crush = function(board, crushMatrix) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (crushMatrix[i][j]) board[i][j] = 0;
    }
  }
};

var nextBoard = function(board) {
  //return true if any changes, false otherwise
  let didBoardChange = false;
  for (let i = 0; i < board[0].length; i++) {
    let col = i;
    let startRow = board.length - 1;
    let swapRow = startRow;

    while (swapRow >= 0) {
      if (board[startRow][col] !== 0) {
        swapRow--;
        startRow--;
      } else if (board[swapRow][col] === 0) {
        swapRow--;
      } else {
        swap(board, startRow, swapRow, col);
        startRow--;
        swapRow--;
        didBoardChange = true;
      }
    }
  }

  return didBoardChange;
};

var swap = function(board, row1, row2, col) {
  let temp = board[row1][col];
  board[row1][col] = board[row2][col];
  board[row2][col] = temp;
};

//iterate through every element in matrix, if 3 in a row, call crush function
//find longest chain function, returns number of elements in a row, also marks a mask
//as seen elements in matrix
//crush function that finds all adjacent values and changes it to zero
//next state function, drops all candy down if there is space underneath
//iterate again until there is no change.
