//https://www.algoexpert.io/questions/Validate%20BST

//You are given a Binary Tree data structure consisting of Binary Tree nodes.
//Each Binary Tree node has an integer value stored in a property called
//'value' and two children nodes stored in properties called 'left' and 'right',
//respectively. Children nodes can either be Binary Tree nodes themselves or
//the None (null) value. Write a function that returns a boolean representing
//whether or not the Binary Tree is a valid BST. A node is said to be a BST
//node if and only if it satisfies the BST property: its value is strictly
//greater tha nthe values of every node to its left; its value is less than or
//equal to the values of every node to its right; and both of its children
//nodes are either BST nodes themselves or None (null) values.

//At first you might think just recursively check if the current value is greater than the left or less than or equal to the right. This would work for most cases but consider the following tree.
//      10
//     /  \
//    5    15
//   / \
//  2   5
// /     \
//1      11
//The node with the value 11 is greater than the parent node, which is fine,
//however, it's also greater than the node with value 10 despite being a
//descendant on the left side.
//I did initially think to recursively go depth first and return the min value
//seen so far, max, and whether the node is a valid tree, which works. However
//the solution is verbose because you need to return 3 values from the function
//and if you have a left and right, there is more complexity to the solution
//than needed.
//Instead, why not pass in a value that the children should never exceed and a
//value that it should never be less than. If your parent node is 10, you know
//on the left, it should never be greater than 10 and you can recursively pass
//that value to the children nodes and validate it that way. This make is
//possible to have simple, more elegant solution.
//As is with most tree traversal, the time complexity is O(n) where n is the
//size of the BST since we need to check every node and the space complexity is
//O(d) where d is the depth of the tree. This is because the solution is
//recursive and so you will have a call stack of size d at worse case scenario.

function validateBst(tree, min = -Infinity, max = Infinity) {
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false;
  let checkLeft = validateBst(tree.left, min, tree.value);
  let checkRight = validateBst(tree.right, tree.value, max);

  return checkLeft && checkRight;
}
