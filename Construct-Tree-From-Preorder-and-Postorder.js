/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null;
  let val = preorder.shift();
  let root = new TreeNode(val);
  let index = inorder.indexOf(val);
  let test = inorderObj[val];
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
};
