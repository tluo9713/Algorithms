//https://leetcode.com/problems/n-queens/

//The n-queens puzzle is the problem of placing n queens on an n×n chessboard
//such that no two queens attack each other.

//Given an integer n, return all distinct solutions to the n-queens puzzle.

//Each solution contains a distinct board configuration of the n-queens'
//placement, where 'Q' and '.' both indicate a queen and an empty space
//respectively.

/* *
 * @param {number} n
 * @return {string[][]}
 */

//The naive solution is to check every possible combination. To do so you first
//you create a board. Then you use a helper function which attempts to add a
//queen at an eligible square. Then you mark every square that is no longer
//eligible because of the new queen. At this point, you recursively call the
//function to find where to insert the queen in the remaining available squares.
//The issue with this is there is a lot of overlap (non unique positions). You
//can filter out for unique positions but this still makes the process very
//slow.
//A solution is to incorporate backtracking. What you do is recognize that each
//row has to have one queen. So why not check every possibility but insert each
//queen in a row and check eligible squares in that row. This drastically
//reduces search time as well as makes sure you have only unique solutions.
//Time complexity O(n!) space complexity O(n)
var solveNQueens = function(n) {
  //create nxn board
  let solutions = [];
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill(0));
  }
  helper(board, n, solutions);
  return solutions;
};

var helper = function(board, limit, solutions, queen = 1) {
  if (queen > limit) {
    insertSolution(board, solutions);
    return;
  }
  let row = queen - 1;
  for (let col = 0; col < board.length; col++) {
    if (board[row][col] === 0) {
      //mark board
      toggleQueen(board, row, col, queen);
      //recursive call
      helper(board, limit, solutions, queen + 1);
      toggleQueen(board, row, col, queen);
    }
  }
};

var toggleQueen = function(board, row, col, num) {
  if (!board[row][col]) {
    //toggle on
    board[row][col] = 'Q';
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === 0) board[row][i] = num;
      if (board[i][col] === 0) board[i][col] = num;
    }
    for (
      let i = 1;
      board[row + i] !== undefined && board[row + i][col + i] !== undefined;
      i++
    ) {
      if (board[row + i][col + i] === 0) board[row + i][col + i] = num;
    }
    for (
      let i = 1;
      board[row - i] !== undefined && board[row - i][col + i] !== undefined;
      i++
    ) {
      if (board[row - i][col + i] === 0) board[row - i][col + i] = num;
    }
    for (
      let i = 1;
      board[row - i] !== undefined && board[row - i][col - i] !== undefined;
      i++
    ) {
      if (board[row - i][col - i] === 0) board[row - i][col - i] = num;
    }
    for (
      let i = 1;
      board[row + i] !== undefined && board[row + i][col - i] !== undefined;
      i++
    ) {
      if (board[row + i][col - i] === 0) board[row + i][col - i] = num;
    }
  } else {
    //toggle off
    board[row][col] = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === num) board[row][i] = 0;
      if (board[i][col] === num) board[i][col] = 0;
    }
    for (
      let i = 1;
      board[row + i] !== undefined && board[row + i][col + i] !== undefined;
      i++
    ) {
      if (board[row + i][col + i] === num) board[row + i][col + i] = 0;
    }
    for (
      let i = 1;
      board[row - i] !== undefined && board[row - i][col + i] !== undefined;
      i++
    ) {
      if (board[row - i][col + i] === num) board[row - i][col + i] = 0;
    }
    for (
      let i = 1;
      board[row - i] !== undefined && board[row - i][col - i] !== undefined;
      i++
    ) {
      if (board[row - i][col - i] === num) board[row - i][col - i] = 0;
    }
    for (
      let i = 1;
      board[row + i] !== undefined && board[row + i][col - i] !== undefined;
      i++
    ) {
      if (board[row + i][col - i] === num) board[row + i][col - i] = 0;
    }
  }
};

var insertSolution = function(board, solutions) {
  let solution = [];
  for (let i = 0; i < board.length; i++) {
    let row = '';
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'Q') row += 'Q';
      else row += '.';
    }
    solution.push(row);
  }
  solutions.push(solution);
};

// var solveNQueens = function(n) {
//     //create nxn board
//     let solutions = []
//     let seen = new Set()
//     let board = []
//     for (let i = 0; i < n; i++) {
//         board.push(new Array(n).fill(0))
//     }
//     let totalNumWays = helper(board, n, solutions, seen)
//     return solutions
// };

// var helper = function(board, limit,solutions, seen, queen = 1) {
//     if (queen > limit) {
//         insertSolution(board, solutions, seen)
//         return
//     }
//     for (let row = 0; row < board.length; row++) {
//         for (let col = 0; col < board[row].length; col++) {
//             if (board[row][col] === 0) {
//                 //mark board
//                 toggleQueen(board, row, col, queen)
//                 //recursive call
//                 helper(board, limit,solutions, seen, queen+1)
//                 toggleQueen(board, row, col, queen)
//             }
//         }
//     }
// }

// var toggleQueen = function(board, row, col, num) {
//     if (!board[row][col]) {
//         //toggle on
//         board[row][col] = 'Q'
//         for (let i = 0; i < board.length; i++) {
//             if (board[row][i] === 0) board[row][i] = num
//             if (board[i][col] === 0) board[i][col] = num
//         }
//         for (let i = 1; board[row+i] !== undefined && board[row+i][col+i] !== undefined; i++) {
//             if (board[row+i][col+i] === 0) board[row+i][col+i] = num
//         }
//         for (let i = 1; board[row-i] !== undefined && board[row-i][col+i] !== undefined; i++) {
//             if (board[row-i][col+i] === 0) board[row-i][col+i] = num
//         }
//         for (let i = 1; board[row-i] !== undefined && board[row-i][col-i] !== undefined; i++) {
//             if (board[row-i][col-i] === 0) board[row-i][col-i] = num
//         }
//         for (let i = 1; board[row+i] !== undefined && board[row+i][col-i] !== undefined; i++) {
//             if (board[row+i][col-i] === 0) board[row+i][col-i] = num
//         }

//     } else {
//         //toggle off
//         board[row][col] = 0
//         for (let i = 0; i < board.length; i++) {
//             if (board[row][i] === num) board[row][i] = 0
//             if (board[i][col] === num) board[i][col] = 0
//         }
//         for (let i = 1; board[row+i] !== undefined && board[row+i][col+i] !== undefined; i++) {
//             if (board[row+i][col+i] === num) board[row+i][col+i] = 0
//         }
//         for (let i = 1; board[row-i] !== undefined && board[row-i][col+i] !== undefined; i++) {
//             if (board[row-i][col+i] === num) board[row-i][col+i] = 0
//         }
//         for (let i = 1; board[row-i] !== undefined && board[row-i][col-i] !== undefined; i++) {
//             if (board[row-i][col-i] === num) board[row-i][col-i] = 0
//         }
//         for (let i = 1; board[row+i] !== undefined && board[row+i][col-i] !== undefined; i++) {
//             if (board[row+i][col-i] === num) board[row+i][col-i] = 0
//         }
//     }
// }

// var insertSolution = function(board, solutions, seen) {
//     let solution = []
//     let str = ''
//     for (let i = 0; i < board.length; i++) {
//         let row = ''
//         for (let j = 0; j < board[i].length; j++) {
//             if (board[i][j] === 'Q') row += 'Q'
//             else row+='.'
//         }
//         solution.push(row)
//         str+=row
//     }
//     if (!seen.has(str)) {
//         seen.add(str)
//         solutions.push(solution)
//     }
// }

//First construct the nxn board with empty strings
//use main helper function (takes in board, # queen)
//  iterates over board for empty spots
//  put a "queen" on the board
//  use add restrictions helper function
//  recursively call main helper on board
//  base case, when you reach n queens return # of ways which is
//  # of previous ways + 1
//
//add restrictions helper function (takes board, row, col of new queen, # queen)
// marks everything in row, col, and diag with number queen
// if called again, will remove queen and row and col with same number
