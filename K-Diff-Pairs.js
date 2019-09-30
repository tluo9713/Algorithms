//https://leetcode.com/problems/k-diff-pairs-in-an-array/

//Given an array of integers and an integer k, you need to find the number of
//unique k-diff pairs in the array. Here a k-diff pair is defined as an integer
//pair (i, j), where i and j are both numbers in the array and their absolute
//difference is k.

/* *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findPairs = function(nums, k) {
  if (k < 0) return 0;
  const dict = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (!dict[num]) {
      if (dict[num - k]) count++;
      if (dict[num + k]) count++;
      dict[num] = 1;
    } else if (k === 0 && dict[num] === 1) {
      count++;
      dict[num]++;
    }
  }
  return count;
};
