//https://leetcode.com/problems/search-insert-position/

//Given a sorted array and a target value, return the index if the target is
//found. If not, return the index where it would be if it were inserted in
//order.

//You may assume no duplicates in the array.

//Nothing too fancy, just realize that since this array is sorted, we can use
//binary search. The only additional component is to realize that if you can't
//find the element, you should return the left pointer. This is because the left
//pointer will be at the right position. The logic behind this is that the
//while loop only ends if right is less than left pointer. This happens because
//left and right pointers are on the same index, but the number at the index
//is either too big or too small. In the case the number at the index is larger
//than the target, we'll decrease the right pointer, which then we terminate
//the while loop. This means, if the target was inserted, it would push the
//number at the left index to the right, and insert the target at left pointer.
//Same logic for vice versa.
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let midIdx = Math.floor((left + right) / 2);
    let midNum = nums[midIdx];
    if (midNum === target) return midIdx;
    if (midNum < target) {
      left = midIdx + 1;
    } else {
      right = midIdx - 1;
    }
  }
  return left;
};
