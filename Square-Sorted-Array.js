//https://leetcode.com/problems/squares-of-a-sorted-array/

//Given an array of integers A sorted in non-decreasing order, return an array
//of the squares of each number, also in sorted non-decreasing order.

// var sortedSquares = function(A) {
//   return A.map((curr) => {
//       return curr ** 2
//   }).sort((a,b) => a-b)
// };

var sortedSquares = function(A) {
  let solutionArr = [];
  let negativePointer = -1;
  let positivePointer;

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    if (num < 0) {
      negativePointer = i;
    } else if (positivePointer === undefined) {
      positivePointer = i;
    }
  }
  if (positivePointer === undefined) positivePointer = A.length;
  while (negativePointer >= 0 || positivePointer < A.length) {
    let negativeSquare =
      (negativePointer < 0 ? Infinity : A[negativePointer]) ** 2;
    let positiveSquare =
      (positivePointer === A.length ? Infinity : A[positivePointer]) ** 2;

    if (positiveSquare < negativeSquare) {
      solutionArr.push(positiveSquare);
      positivePointer++;
    } else {
      solutionArr.push(negativeSquare);
      negativePointer--;
    }
  }

  return solutionArr;
};
