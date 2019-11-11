//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

//Given a binary tree, return the zigzag level order traversal of its nodes'
//values. (ie, from left to right, then right to left for the next level and
//alternate between).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/* *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let arr = [];
  let queue = [root];

  while (queue.length) {
    let nextQueue = [];
    let currLevel = [];

    queue.forEach(node => {
      currLevel.push(node.val);
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    });
    arr.push(currLevel);
    queue = nextQueue;
  }
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].reverse();
  }
  return arr;
};
