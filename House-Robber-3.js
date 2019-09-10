//https://leetcode.com/problems/house-robber-iii/
//The thief has found himself a new place for his thievery again. There is only
//one entrance to this area, called the "root." Besides the root, each house
//has one and only one parent house. After a tour, the smart thief realized
//that "all houses in this place forms a binary tree". It will automatically
//contact the police if two directly-linked houses were broken into on the same
//night.

//Determine the maximum amount of money the thief can rob tonight without
//alerting the police.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//This problem is just an extension of the house robber problem. You just need
//to preserve the logic for a tree node.

var rob = function(root) {
  return Math.max(...helper(root));
};

var helper = function(root) {
  if (root === null) return [0, 0];
  if (root.left === null && root.right === null) {
    return [root.val, 0];
  }
  let left = helper(root.left);
  let right = helper(root.right);

  let includeRoot = root.val + left[1] + right[1];
  let excludeRoot = left[0] + right[0];

  includeRoot = Math.max(includeRoot, excludeRoot);
  let answer = [includeRoot, excludeRoot];
  return answer;
};
