//https://leetcode.com/problems/first-missing-positive/

//Given an unsorted integer array, find the smallest missing positive integer.

/* *
 * @param {number[]} nums
 * @return {number}
 */

//This problem can be solved incredibly naively just using the array includes
//methods. This works, but time complexity of O(n^2) with constant space.
//Alternatively, you can sort the array first, and then check for which number
//is missing for an O(nlogn) and constant space solution.
//Next, you can use an object to store every number you have seen, then iterate
//through numbers from 1 to array length and if you ever have a falsy value,
//you found your missing number. O(n) time BUT O(n) space complexity.
//Finally, what if you convert every number that's not eligible (negative
//numbers, 0, or numbers larger than the array length) to a value we won't check
// such as infinity. This is really just to mark these numbers. Then we go
//through every number, and if it's eligible, we go to the array at that index,
//and turn it negative. This will mark every number that exists in the array as
//negative. Now if we iterate through the array, the first number you encounter
//that is positive, that index is the one that is missing. There is a lot of
//work but everything is O(n) time complexity and O(1) space since you're only
//modifying the array.
var firstMissingPositive = function(nums) {
  if (nums.length === 0) return 1;

  let tracker = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = Infinity;
    }
    if (nums[i] === nums.length) tracker = true;
  }
  for (let i = 0; i < nums.length; i++) {
    let element = Math.abs(nums[i]);
    if (element !== Infinity && element !== nums.length) {
      nums[element] = -Math.abs(nums[element]);
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) return i;
  }
  return tracker ? nums.length + 1 : nums.length;
};
