class BinarySearchTree {
  constructor() {
    this.root = this.left = this.right = null;
  }
  insert(val) {
    if (this.root === null) {
      //if null, just insert value
      this.root = val;
    } else if (this.root > val) {
      //if root is greater than value, then it belongs on the right side
      //if the right is null, that means there is no BST there.

      //If we want to insert a value at the right, we have to initalize it with
      //a new BST.
      if (this.right === null) {
        this.right = new BinarySearchTree();
      }
      //Now that there is a BST, you can insert on the right side.
      this.right.insert(val);
    } else {
      //same logic for left side.
      if (this.left === null) {
        this.left = new BinarySearchTree();
      }
      this.left.insert(val);
    }
  }
}
