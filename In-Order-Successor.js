function inorderSuccessor(root, p) {
  let queue = [root];
  let possibleSuccessor = null;
  let current;
  while (queue.length) {
    current = queue.shift();
    if (p.val < current.val) {
      possibleSuccessor = current.val;
      if (current.left) queue.push(current.left);
    } else {
      if (current.right) queue.push(current.right);
    }
    // } else if (p.val === current.val) {
    //   if (current.right) queue.push(current.right);
    // } else if (current.right) {
    //   queue.push(current.right);
    // }
  }
  return possibleSuccessor;
}

function inorderSuccessorNoQueue(root, p) {
  let current = root;
  let possibleSuccessor = null;
  while (current) {
    if (p.val < current.val) {
      possibleSuccessor = current.val;
      if (current.left) current = current.left;
      else current = null;
    } else if (current.right) {
      current = current.right;
    } else {
      current = null;
    }
  }

  return possibleSuccessor;
}
