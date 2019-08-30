/**
 * @param {number[]} nums
 * @return {number}
 */

//https://leetcode.com/problems/find-the-duplicate-number/submissions/
//There are multiple ways of doing this problem. One way is to use a hash table
//that stores every value you have seen before, and then return whenever you
//seen a certain number. This is O(n) time and O(n) space. What are the
//alternatives? Well if you need to do this in constant space, you have to look
//at possibly sorting the nums array. This way, if there are any duplicates,
//they are next to each other, and you can just check. This is O(nlogn) time and
//O(1) space. You use the same array, so it's constant, and going through the
//sorted array, is linear, however, the sorting is nlogn, which overwhelms the
//linear time. What if you need linear time, and constant space?
//Well, you can abstract this array to be a linked list, where the current node
//points to the next node and the next node is determined by the value at the
//array. For example, given arr [1,3,4,2,2]. The first node is at index 0, and
//it points to the number at arr[1] which is three. The node 3 points to
//arr[3] which is 2 and so on. It may be counter intuitive to abstract it to
//a linked list, however, if we do, you notice that the duplicated number is
//actually the number where the start of the cyclical linked list. This is a
//problem that can be solved using the tortoise and the hare. Refer to
//Linked List Cycle 2.

var findDuplicate = function(nums) {
  let seenNums = {};

  for (let i = 0; i < nums.length; i++) {
    if (seenNums[nums[i]]) return nums[i];
    else seenNums[nums[i]] = true;
  }
};

var findDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return nums[i];
  }
};

var findDuplicate = function(nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[hare];
    hare = nums[hare];
  } while (tortoise !== hare);

  hare = nums[0];
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }
  return hare;
};
var findDuplicate = function(nums) {
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);
  hare = nums[0];
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }
  return hare;
};
