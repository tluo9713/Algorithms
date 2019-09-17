//https://leetcode.com/problems/consecutive-numbers-sum/

//Given a positive integer N, how many ways can we write it as a sum of
//consecutive positive integers?

/* *
 * @param {number} N
 * @return {number}
 */

//The naive solution would be to create a sliding window of length 1 to N and
//check if there was a window which sum is equal to N. Incrememt the number
//if it is. This is incredibly slow and ends up being O(n^2) time and O(1) space
//complexity.

//The more optimized solution would be to recognize that the sum of 2
//consecutive numbers is x+x+1 which simplifies to 2x+1. 2x+1 = C where C is our
//input. Solving for x you get x = (C-1)/2. If x is a whole number then we know
//it's valid. You can do the same for 3 consecutive numbers which is x+x+1+x+2
//which is 3x+3. Solve for x again. What about 4 consecutive numbers? This could
//be annoying to do this every time, but generically we can see that the
//equation is Ax+ B = C. A would be the number of consecutive numbers and B is
//some constant, but to calculate the constant is the summation of numbers from
//1 to A.
//Now you just solve for every Ax + B = C while B < C. This is O(sqrt(n)) time
//complexity and O(1) space.
var consecutiveNumbersSum = function(N) {
  let count = 0;

  let a = 1;
  let b = 0;

  while (b < N) {
    if (Math.floor((N - b) / a) === (N - b) / a) count++;

    b += a;
    a++;
  }
  return count;
};
