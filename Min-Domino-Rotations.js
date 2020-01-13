//https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the i-th domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

// If it cannot be done, return -1.
//Alternatively you can modularize even more by making a helper function that checks the amount of swaps for A[0] given A and B and then A[0] given B and A.
var minDominoRotations = function(A, B) {
  let top = A[0];
  let bot = B[0];
  let topSwap = 0;
  let botSwap = 0;
  let topToBotSwap = 0;
  let botToTopSwap = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== top && B[i] === top) topSwap++;
    if (B[i] !== top && A[i] === top) topToBotSwap++;
    if (A[i] !== top && B[i] !== top) topSwap = topToBotSwap = Infinity;

    if (B[i] !== bot && A[i] === bot) botSwap++;
    if (A[i] !== bot && B[i] === bot) botToTopSwap++;
    if (A[i] !== bot && B[i] !== bot) botSwap = botToTopSwap = Infinity;
  }

  if (topSwap === Infinity && botSwap === Infinity) return -1;

  return Math.min(topSwap, botSwap, topToBotSwap, botToTopSwap);
};
