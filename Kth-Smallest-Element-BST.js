/*
Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  return helper(root, [k]);
};

var helper = function(root, val) {
  if (!root) return null;

  let left = helper(root.left, val);
  if (left !== null) return left;
  val[0] -= 1;
  if (val[0] === 0) return root.val;
  let right = helper(root.right, val);
  if (right !== null) return right;
  return null;
};
