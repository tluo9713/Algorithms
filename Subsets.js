/*
https://leetcode.com/problems/subsets/
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.


*/

/* *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let allSubsets = [[]];

  for (let i = 0; i < nums.length; i++) {
    let currSubsets = [];
    let num = nums[i];
    allSubsets.forEach(subset => {
      currSubsets.push([...subset, num]);
    });
    allSubsets.push(...currSubsets);
  }
  return allSubsets;
};
