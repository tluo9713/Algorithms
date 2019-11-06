class Node {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  push = val => {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.length++;
    return this;
  };

  pop = () => {
    if (this.tail === null) {
      return null;
    }

    let popNode = this.tail;
    if (this.tail !== this.head) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popNode.prev = null;
    } else {
      this.head = this.tail = null;
    }

    this.length--;
    return popNode;
  };

  shift = () => {
    if (!this.head) {
      return null;
    }
    let shiftNode = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let nextNode = this.head.next;
      nextNode.prev = null;
      this.head.next = null;
      this.head = nextNode;
    }

    this.length--;
    return shiftNode;
  };

  unshift = val => {
    let newNode = new Node(val);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }

    this.length++;
    return this;
  };

  get = index => {
    if (index > this.length) return null;
    let counter = 0;
    let curr = this.head;
    while (counter !== index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  };

  set = (idx, val) => {
    let node = this.get(idx);
    if (!node) return null;
    node.val = val;
    return this;
  };

  insert = (idx, val) => {
    let newNode = new Node(val);
    let position = this.get(idx);
    if (!position) return null;

    // if insert before node
    if (position === this.head) {
      newNode.next = position;
      position.prev = newNode;
      this.head = newNode;
    } else {
      position.prev.next = newNode;
      newNode = position.prev;
      newNode.next = position;
      position.next = newNode;
    }
    //if insert after node
    // if (position === this.tail) {
    //   position.next = newNode;
    //   newNode.prev = position;
    //   this.tail = newNode;
    // } else {
    //   newNode.next = position.next;
    //   position.next.prev = newNode;
    //   position.next = newNode;
    //   newNode.prev = position;
    // }
    this.length++;
    return this;
  };

  remove = idx => {
    //alternatively we can just use shift and what not
    let removedNode = this.get(idx);
    if (!removedNode) return null;
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    if (removedNode === this.head) {
      removedNode = this.head.next;
    } else if (removedNode === this.tail) {
      this.tail = removedNode.prev;
      this.tail.next = null;
    } else {
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
    }
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  };
}

let testDLL = new DoublyLinkedList();
