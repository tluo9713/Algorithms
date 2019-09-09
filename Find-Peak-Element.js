//https://leetcode.com/problems/find-peak-element/

//A peak element is an element that is greater than its neighbors.
// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
// You may imagine that nums[-1] = nums[n] = -∞.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

//The naive solution would be to iterate through ever number in the array to
//check if it is a peak. You would also have to make sure you're not at the
//ends of the array or else you have make sure to account for these edge cases.
//This works and is in O(n) time complexity as well as O(1) space since you
//don't really create any variables.
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i] > nums[i + 1]) return i;
    else if (i === nums.length - 1 && nums[i] > nums[i - 1]) return i;
    else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
  }
  return 0;
};

//The more optimized answer is to realize that if you use binary search, worse case scenario you'll arrive at a solution at O(logn) time complexity while keeping a O(1) space complexity. You just find the mid point and reassign your left and right pointers based on the values on the left or right. Funnily enough, the speed on leetcode for the optimized is slower than the naive approach.
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid === 0 && nums[mid] > nums[mid + 1]) return mid;
    else if (mid === nums.length - 1 && nums[mid] > nums[mid - 1]) return mid;
    else if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;

    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid - 1;
  }
};
