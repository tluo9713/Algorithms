/*
https://leetcode.com/problems/shuffle-an-array/
Shuffle a set of numbers without duplicates.
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = [...nums];
  this.mutate = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.mutate = [...this.original];
  return this.mutate;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = 1; i < this.mutate.length; i++) {
    let random = Math.floor(Math.random() * (i + 1));
    swap(this.mutate, i, random);
  }

  return this.mutate;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
