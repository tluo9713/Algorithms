/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//To return the maximum depth of the binary tree, I decided to use recursion
//on the node. The base case is if the tree is null, in which case return 0
//because it will not contribute to the depth. Otherwise the recursive case will
//return 1 (because the current tree is not null and thus contributes to the
//count of max) and then recurse on the root.left and root.right and take the
//math max of the results.
//The time complexity is O(n) where n is how many nodes there are in the tree
//The space complexity is O(d) where d is how deep the tree goes. This is
//because as we recurse down the tree, it adds on top of the call stack, and
//won't pop off until the function resolves.
