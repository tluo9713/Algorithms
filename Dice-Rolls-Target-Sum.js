/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
//https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
//You can attempt to generate every possible dice combinations but this will
//very quickly grow way too big.

//The solution here would be to use dynamic programming to calculate how
//the amount of solutions for one dice, and build on that with each successive
//array. This will run in O(d*target) time complexity since we need to
//build an array of target length, and O(d*target) space complexity.
var numRollsToTarget = function(d, f, target) {
  let memo = [];
  for (let i = 0; i < d; i++) {
    memo.push(new Array(target + 1).fill(0));
  }
  for (let i = 1; i <= f; i++) {
    memo[0][i] = 1;
  }
  for (let i = 1; i < d; i++) {
    for (let j = 1; j <= target; j++) {
      for (let k = 1; k <= f; k++) {
        if (j - k < 0) break;
        memo[i][j] += memo[i - 1][j - k];
        memo[i][j] = memo[i][j] % (10 ** 9 + 7);
      }
    }
  }
  return memo[d - 1][target];
};
