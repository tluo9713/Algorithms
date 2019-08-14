/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//link to problem https://leetcode.com/problems/binary-tree-inorder-traversal/
//This problem asks for an in order traversal of a binary tree.
//The approach is to use recursion to maintain in order insertion into array.
//To simplify, I added an additional optional parameter with a default value.
//Since we pass in an array, any modifications are saved on to the array.
var inorderTraversal = function(root, arr = []) {
  if (!root) return arr;

  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);

  return arr;
};
