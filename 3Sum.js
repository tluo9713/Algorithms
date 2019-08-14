/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//link to problem
//https://leetcode.com/problems/3sum/

//The brute force way would be to just use 3 for loops and include some conditions
//to ignore overlapping indices. This will be O(n) space complexity  due to
//needing an array to hold all possible triplets. However the time complexity is
//O(n ** 3)
//To optimize, we will first sort the array. Knowing that the array is sorted,
//we can just have one pointer go from 0 to the 2nd to last element from the
//array. Then we have two pointers, one that is the element directly to the right
//of our first pointer, and the second will be at the last element. We can leverage
//the fact that this array is sorted, and with these 2 following pointers, if
//the number is too large, the left pointer can't be any smaller since it started
//on the left most available element. This means our only option is to move our
//right pointer to the right. THe converse is true if the sum is too small, we will
//ultimately have to shift our left pointer to the right, increasing the total sum.
//This will generate all possible sets.
//Sorting the array is an O(nlogn) time complexity. The secondary process starts
//with moving one pointer n times leading it to be O(n) time. There is a nested
//while loop that moves two pointers which is also O(n) time. The nested loops
//are a combined time O(n ** 2) and the space complexity is at O(n).
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let pointer = 0;
  let triplets = [];
  let prev;
  while (pointer <= nums.length - 2) {
    let first = nums[pointer];

    if (first !== prev) {
      let leftP = pointer + 1;
      let rightP = nums.length - 1;
      while (leftP < rightP) {
        let left = nums[leftP];
        let right = nums[rightP];

        if (first + left + right === 0) {
          triplets.push([first, left, right]);
          while (left === nums[leftP] && leftP < nums.length) leftP++;
          while (right === nums[rightP] && rightP > 0) rightP--;
        } else if (first + left + right < 0) {
          while (left === nums[leftP] && leftP < nums.length) leftP++;
        } else {
          while (right === nums[rightP] && rightP > 0) rightP--;
        }
      }
      prev = first;
    }

    pointer++;
  }

  return triplets;
};
