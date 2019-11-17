/*
https://leetcode.com/problems/binary-tree-right-side-view/
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  let solutions = [];
  let queue = [root];

  while (queue.length) {
    let rightEl = queue[queue.length - 1];
    solutions.push(rightEl.val);
    let children = [];
    queue.forEach(node => {
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    });
    queue = children;
  }
  return solutions;
};

//BFS using a queue
//initialize a solutions arr
//while loop as long as there's a queue
//push to solutions the end of the queue
//iterate through level and add to childrens arr
//reassign queue
