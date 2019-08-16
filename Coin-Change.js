/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
  const memo = new Array(amount + 1);
  memo[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    let coinValue = coins[i];
    for (let j = coinValue; j < memo.length; j++) {
      let pastIdx = j - coinValue;
      let pastLowest = memo[pastIdx];
      if (pastLowest === undefined) {
      } else if (pastLowest !== undefined && memo[j] === undefined) {
        memo[j] = pastLowest + 1;
      } else if (pastLowest !== undefined && memo[j] !== undefined) {
        memo[j] = Math.min(pastLowest + 1, memo[j]);
      }
    }
  }
  let lastEl = memo[memo.length - 1];
  return lastEl === undefined ? -1 : lastEl;
};

//The solution takes advantage of memoization to reduce how long it would take
//to calculate. You have a memo array that for each index holds the minimum
//amount of coins to achieve this value. This is a bottom up approach as well.
//First you start with the array with undefined values. You initialize the 0
//index to be 0. This is because you do not need any coins to achieve this
//value. Then for each coin and at every value, you check if the index
//(which again represents the current value) minus the coin amount exist on the
//memo table. Because the memo table will always hold the min amount of coins
//to get to that index value, you would just add one to the index - coin amount
//value and you will the amount of coins it would take to go to the current
//index. Then you compare if the current memo exist, in which case you take the
//math min of both values because you always want the smallest amount and not
//the just any possible amount that works.

//With the memo table, the space complexity is O(c) where c is the length of
//the coin array. The time complexity is O(n * c) where n is the target value.
//Additional notes: Had we initialized the values of the memo array to be
//infinity, the logic would be easier since we never have to check if the values
//are undefined.
