/*
https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let children = [];
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      if (i !== queue.length - 1) node.next = queue[i + 1];
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    queue = children;
  }
  return root;
};
