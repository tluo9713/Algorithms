//https://leetcode.com/problems/word-search/

//Given a 2D board and a word, find if the word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cell, where
//"adjacent" cells are those horizontally or vertically neighboring. The same
//letter cell may not be used more than once.

/* *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  //iterate throughout whole board trying to find a matching first
  //letter in the board, if so, implement the helper and check if its
  //true. If not, just continue, else, return true because we found it
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currLetter = board[i][j];
      if (currLetter === word[0]) {
        let found = helper(board, word, i, j);
        if (found) return true;
      }
    }
  }
  return false;
};

//This helper function will perform BFS with backtracking looking for
//solutions
var helper = function(board, word, row, col, index = 0) {
  let rowLimit = board.length - 1;
  let colLimit = board[0].length - 1;
  //If row and col are not in limits, just return false
  if (index === word.length) return true;

  if (row < 0 || row > rowLimit) return false;
  if (col < 0 || col > colLimit) return false;

  let currLetter = board[row][col];
  //If the letters don't match, just exit now
  if (currLetter !== word[index]) return false;
  //remove letter to prevent going back
  board[row][col] = '';
  //BFS search outward
  index++;
  let up = helper(board, word, row - 1, col, index);
  let down = helper(board, word, row + 1, col, index);
  let left = helper(board, word, row, col - 1, index);
  let right = helper(board, word, row, col + 1, index);

  if (up || down || left || right) return true;
  //put letter back
  board[row][col] = currLetter;
  return false;
};

var existNaive = function(board, word) {
  let letter;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      letter = board[i][j];
      if (letter === word[0]) {
        if (BFS(board, word, i, j)) return true;
      }
    }
  }
  return false;
};

var BFS = function(board, word, row, col, position = 1, traversed = null) {
  if (position === word.length) return true;
  if (!traversed) traversed = board.map(row => row.map(el => true));
  traversed[row][col] = false;

  if (
    board[row - 1] &&
    board[row - 1][col] === word[position] &&
    traversed[row - 1][col]
  ) {
    if (BFS(board, word, row - 1, col, position + 1, traversed)) return true;
  }
  if (
    board[row + 1] &&
    board[row + 1][col] === word[position] &&
    traversed[row + 1][col]
  ) {
    if (BFS(board, word, row + 1, col, position + 1, traversed)) return true;
  }
  if (board[row][col - 1] === word[position] && traversed[row][col - 1]) {
    if (BFS(board, word, row, col - 1, position + 1, traversed)) return true;
  }
  if (board[row][col + 1] === word[position] && traversed[row][col + 1]) {
    if (BFS(board, word, row, col + 1, position + 1, traversed)) return true;
  }
  traversed[row][col] = true;
  return false;
};
