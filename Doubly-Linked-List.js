//Create a Doubly Linked List with the methods:
//push, pop, shift, unshift, remove, set, get, insert, and reverse
//A doubly linked list is an extension of a linked list. It is an abstract data
//structure that can be used to solve certain problems. A Singly Linked List will
//mostly have the same properties with the only exception that it can not traverse
//backwards.
//Advantages of Linked List. You do not need to declare the length to begin with,
//adding and removing nodes from the beginning or end are both O(1). These
//strengths are great to use in Stacks and Queues problems.
//Disadvantages of Linked List, traversing a linked list is an O(n) operation,
//same goes for searching. It's also not a built in data structure in JS so we
//must create it ourselves.

//class node will be used in linked list to hold data
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Adds a node to the end of the DLL. This is an O(1) time operation as you only
  //need to append to the end, and in this DLL this.tail is accessible.
  //Edge cases to watch out for, if the DLL is empty, and remembering that this
  //is DLL so you must add the link from the tail to new node as well as new node
  //to tail. Returning this so you can chain methods on it.
  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  //Removes a node from the end of DLL. O(1) time operation. Access DLL tail and
  //then go to previous node. Remove that node and return it.
  //Edge cases: If there are no nodes in DLL or if there is only one node in DLL.
  pop() {
    if (this.tail === null) return undefined;
    let node = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  //Adds a node at the beginning of DLL. O(1) time operation. Access the head
  //and make the previous point to new node and new node point to head. Then
  //reassign head. Returns DLL if you wanted to chain.
  //Edge cases to watch out for, empty DLL
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
  //Removes node from beginning of DLL. O(1) time operation. Access the head and
  //detach it from next. Assigns new head. Returns the node.
  //Edge cases: Empty DLL
  shift() {
    if (this.length === 0) return undefined;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return node;
  }
  //Removes the nth node from head. O(n) operation because you must traverse
  //the DLL to access the node and then detach it. Return node removed.
  //Edge cases: Remove from beginning, end or if there is only one node.
  remove(idx) {
    if (idx > this.length) return undefined;
    if (this.head === null) return undefined;
    let nodeCount = 0;
    let node = this.head;
    while (idx !== nodeCount) {
      node = node.next;
      nodeCount++;
    }
    if (node !== this.head && node !== this.tail) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
    }
    if (node === this.head) {
      this.head = this.head.next;
      this.head.prev.next = null;
      this.head.prev = null;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return node;
  }
  //Set the nth node from head with a value. O(n) operation because you must traverse
  //the DLL to access the node and then set new value. Returns boolean for if
  //the set was successful
  //Edge cases: nth node doesn't exist.
  set(idx, val) {
    if (idx > this.length) return false;
    let nodeCount = 0;
    let node = this.head;
    while (idx !== nodeCount) {
      node = node.next;
      nodeCount++;
    }
    node.val = val;
    return true;
  }
  //Get the nth node from head value. O(n) operation because you must traverse
  //the DLL to access the value. Returns the node
  //Edge cases: nth node doesn't exist.
  get(idx) {
    if (this.length < idx) return null;
    let nodeCount = 0;
    let node = this.head;
    while (nodeCount < idx) {
      node = node.next;
      nodeCount++;
    }
    return node;
  }
  //Inserts a new node in front of the nth node from head. O(n) operation because you must traverse
  //the DLL to access the node and then detach it.
  //Edge cases: Remove from beginning, end or if there is only one node.
  insert(idx, val) {
    if (this.length < idx) return false;
    if (idx < 0) return false;
    let newNode = new Node(val);
    let node = this.head;
    let nodeCount = 0;
    while (nodeCount < idx) {
      nodeCount++;
      node = node.next;
    }
    if (this.length === idx) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      newNode.prev = node.prev;
      newNode.next = node;
      node.prev.next = newNode;
      node.prev = newNode;
    }
    this.length++;
    return true;
  }
  //Reverses a doubly linked list. This is an O(n) time operation. Key points
  //to remember are to change the head and tail.
  reverse() {
    if (this.length === 0) return null;
    let node = this.head;
    let prevNode;
    while (node) {
      let nextNode = node.next;
      if (node === this.head) {
        node.prev = node.next;
        node.next = null;
        this.tail = node;
      } else {
        node.prev = node.next;
        node.next = prevNode;
      }
      prevNode = node;
      node = nextNode;
    }
    this.head = prevNode;
    return this;
  }
}
