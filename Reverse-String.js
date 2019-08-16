/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//https://leetcode.com/problems/reverse-string/
var reverseString = function(s) {
  //return s.reverse()
  let pointer = 0;
  while (pointer < s.length / 2) {
    swap(s, pointer, s.length - 1 - pointer);
    pointer++;
  }
};

var swap = function(arr, firstIdx, secondIdx) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
};

//Reverse an array with letters in place.
//I used a helper function that swaps the values of two indices in an array.
//The first array will iterate through half of the array and use the helper
//function to swap with the other corresponding index.

//Space complexity is O(1) since we are doing in place. Time complexity is O(n).
//Even though we only complete n/2 operations, we drop the constant 1/2 in this
//case.
