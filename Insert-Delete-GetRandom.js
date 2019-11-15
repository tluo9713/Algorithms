/*
https://leetcode.com/problems/insert-delete-getrandom-o1/

Design a data structure that supports all following operations in average O(1) time.

    insert(val): Inserts an item val to the set if not already present.
    remove(val): Removes an item val from the set if present.
    getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.nums = {};
  this.set = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  //If num already exist, return false, no need to do anything
  if (this.nums[val] !== undefined) return false;
  //If it doesn't, we'll add it to our set array, then insert the val to the object
  //and assign it to the index and then return true
  this.set.push(val);
  this.nums[val] = this.set.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  //If num doesn't exist, no need to do anything, return false
  if (this.nums[val] === undefined) return false;
  //If number does, we should swap the position of the last element in the array
  //then pop it out. delete the key of the removed val and update the value of the
  //swapped key

  let lastNum = this.set[this.set.length - 1];
  if (lastNum !== val) {
    let idx = this.nums[val];
    this.nums[lastNum] = idx;
    this.set[idx] = lastNum;
  }
  this.set.pop();
  delete this.nums[val];

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  //generate a random number and return that val
  let length = this.set.length;
  let random = Math.floor(Math.random() * length);
  return this.set[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
