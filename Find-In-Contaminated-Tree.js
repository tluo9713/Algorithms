/*
https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
Given a binary tree with the following rules:

    root.val == 0
    If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
    If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2

Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

You need to first recover the binary tree and then implement the FindElements class:

    FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
    bool find(int target) Return if the target value exists in the recovered binary tree.

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
 */
var FindElements = function(root) {
  this.root = root;
  root.val = 0;
  let queue = [[root, 0]];
  while (queue.length) {
    let [currNode, val] = queue.shift();
    currNode.val = val;
    if (currNode.left) queue.push([currNode.left, 2 * val + 1]);
    if (currNode.right) queue.push([currNode.right, 2 * val + 2]);
  }
  return null;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  let arr = [];
  while (target !== 0) {
    arr.push(target);
    target = Math.floor((target - 1) / 2);
  }
  let currNode = this.root;
  while (arr.length) {
    let curr = arr.pop();
    if (currNode.left && currNode.left.val === curr) currNode = currNode.left;
    else if (currNode.right && currNode.right.val === curr)
      currNode = currNode.right;
    else {
      return false;
    }
  }
  return true;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
