/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let arr = [];
  let solution = [];

  for (let i = 0; i < k; i++) {
    let curr = nums[i];
    //pop off smaller nums
    while (arr.length) {
      //get last element in arr
      let last = arr[arr.length - 1];
      let lastNum = nums[last];
      if (lastNum <= curr) arr.pop();
      else break;
    }
    arr.push(i);
  }
  let firstMax = nums[arr[0]];
  if (arr.length) solution.push(firstMax);
  for (let i = k; i < nums.length; i++) {
    let curr = nums[i];
    //shift off first element if doesn't fit
    if (arr[0] === i - k) arr.shift();
    //pop off smaller nums
    while (arr.length) {
      //get last element in arr
      let last = arr[arr.length - 1];
      let lastNum = nums[last];
      if (lastNum <= curr) arr.pop();
      else break;
    }
    arr.push(i);
    let currMax = nums[arr[0]];
    solution.push(currMax);
  }
  return solution;
};

/*We'll us a sliding array to keep track of important idx. Here's the logic
the first number in the idx must always be the largest number so we can just return that number idx
when we move to the next number, we first pop off any idx that doesn't belong
then we check if the number we're about to add is larger than the last number in the array. if so, pop off the number. repeat as needed
then add the current number
return the biggest number at that point (first index)
*/
