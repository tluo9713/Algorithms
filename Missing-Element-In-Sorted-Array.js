/*

https://leetcode.com/problems/missing-element-in-sorted-array/
Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.
*/
/* *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1] - 1;
    if (k <= diff) return nums[i - 1] + k;
    k -= diff;
  }
  return nums[nums.length - 1] + k;
};

var missingElementNaive = function(nums, k) {
  let num = nums[0];
  let set = new Set(nums);
  while (k !== 0) {
    num++;
    while (set.has(num)) num++;
    k--;
  }

  return num;
};

//start at left number
//put nums into a set
//while k !== 0, we'll find missing number and then decrease k
