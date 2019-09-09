//https://leetcode.com/problems/perfect-squares/

// Given a positive integer n, find the least number of perfect square numbers
//(for example, 1, 4, 9, 16, ...) which sum to n.

//The problem is pretty daunting at first, but what you could do is dynamic
//programming to solve it. First you need to determine the numbers you can use
//which is any number that's less than the square root of the input number. Then
//you create an array from 0 to that value. All with initial value of Infinity.
//The only exception to this is the 0th index which is at 0. This array represents the least amount of perfect squares to sum up to this number. You just build your solution starting from the smallest until you get to the largest. At the end you'll have the solution at the last element of the array.
//This is O(nlogn) time complexity and O(n) space complexity.

var numSquares = function(n) {
  let minPerfectSquare = new Array(n + 1).fill(Infinity);
  minPerfectSquare[0] = 0;
  let squareLimit = Math.floor(Math.sqrt(n));
  let square;
  for (let i = 1; i <= squareLimit; i++) {
    square = i ** 2;

    for (let j = square; j < minPerfectSquare.length; j++) {
      minPerfectSquare[j] = Math.min(
        minPerfectSquare[j],
        minPerfectSquare[j - square] + 1
      );
    }
  }
  return minPerfectSquare[minPerfectSquare.length - 1];
};
