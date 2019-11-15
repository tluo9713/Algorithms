/*
https://leetcode.com/problems/validate-binary-search-tree/

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
  if (!root) return true;
  if (root.val <= lower || root.val >= upper) return false;
  let checkLeft = isValidBST(root.left, lower, root.val);
  let checkRight = isValidBST(root.right, root.val, upper);
  return checkLeft && checkRight;
};
//DFS that takes bounds. There are certain bounds it must fall with in.
//if it fails, return false, else recurse deeper and update bounds
