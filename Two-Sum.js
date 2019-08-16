/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Linke to problem
//https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  const complement = {};

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (typeof complement[currNum] === 'number') {
      return [complement[currNum], i];
    }
    complement[target - currNum] = i;
  }
};

//The solution to this uses a hash table to hold every seen number. By holding
//every complement of the seen number number with the value being the index
// While you're iterating through the array, you will know if there exists a
//pair since you store every complement which means it exists. Then you can
// return indices.
// The space complexity O(n) with time complexity being O(n).
