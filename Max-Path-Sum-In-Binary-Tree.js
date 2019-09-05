//https://www.algoexpert.io/questions/Max%20Path%20Sum%20In%20Binary%20Tree

// Write a function that takes in a Binary Tree and returns its max path sum.
//A path is a collection of connected nodes where no node is connected to more
//than two other nodes; a path sum is the sum of the values of the nodes in a
//particular path. Each Binary Tree node has a value stored in a property
//called 'value' and two children nodes stored in properties called 'left' and
//'right', respectively. Children nodes can either be Binary Tree nodes
//themselves or the None(null) value.

//Initially this problem seems intimidating, because there are so many
//possibilities. The first thing I think of is recursion and maybe solving this
//with a helper function. What you could do is calculate the max distance if
//the path ended early and also the max distance if you continue a path. With
//these two returned variables you can continue to build on the previous
//solutions to create the current solution. This is exactly the process of
//recursion, breaking up a bigger problem into smaller solvable problem. The
//only other things to notoe is this may not be a Binary Search Tree, and that
//values may be negative, so you have to include the possibility of ignoring a
//path/node.
//The space complexity is O(d) where d represents the depth of tree (which
//could be all nodes if this was a degenerate tree). The time complexity is O(n)
//because you do have to traverse the entire tree.

function maxPathSum(tree) {
  let possibleSolutions = helper(tree);
  return Math.max(...possibleSolutions);
}

function helper(tree) {
  if (!tree) return [0, 0];
  let sum = tree.value;
  let [leftPath, leftMax] = helper(tree.left);
  let [rightPath, rightMax] = helper(tree.right);
  leftPath = Math.max(leftPath, 0);
  rightPath = Math.max(rightPath, 0);
  let continuePathMax = Math.max(leftPath, rightPath);
  let pathEndingHere = sum + leftPath + rightPath;
  let earlyEndMax = Math.max(leftMax, rightMax, pathEndingHere);
  return [sum + continuePathMax, earlyEndMax];
}
