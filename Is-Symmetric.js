/*
https://leetcode.com/problems/symmetric-tree/

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/* *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return helper(root, root);
};

var helper = function(left, right) {
  if (!left && !right) return true;
  if (!left && right) return false;
  if (left && !right) return false;
  if (left.val !== right.val) return false;

  return helper(left.left, right.right) && helper(left.right, right.left);
};

//use recursion to perform DFS and compare left and right.
//if both inputs are null, return true
//if one is null and the other is not, return false
//if current val is not equal return false
//return left and right
