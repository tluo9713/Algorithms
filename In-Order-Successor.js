function inorderSuccessor(root, p) {
  let queue = [root];
  let possibleSuccessor = null;
  let current;
  while (queue.length) {
    current = queue.shift();
    if (p.val < current.val) {
      if (possibleSuccessor === null) {
        possibleSuccessor = current.val;
      } else {
        possibleSuccessor = Math.min(current.val, possibleSuccessor);
      }
      if (current.left) queue.push(current.left);
    } else if (p.val === current.val) {
      if (current.right) queue.push(current.right);
    } else if (current.right) {
      queue.push(current.right);
    }
  }
  return possibleSuccessor;
}
