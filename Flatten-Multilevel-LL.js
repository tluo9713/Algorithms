//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

//You are given a doubly linked list which in addition to the next and previous
//pointers, it could have a child pointer, which may or may not point to a
//separate doubly linked list. These child lists may have one or more children
//of their own, and so on, to produce a multilevel data structure, as shown in
//the example below.

//Flatten the list so that all the nodes appear in a single-level, doubly linked
//list. You are given the head of the first level of the list.

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/* *
 * @param {Node} head
 * @return {Node}
 */

//What makes this solution more optimized is that every time there is a child
//we will recursively call the helper function, but since the helper function
//traverses to the end of the linked list for us and returns it, we no longer
//have to traverse multiple times, just once. This makes it an O(n) time
//complexity and a O(1) space complexity.
var flatten = function(head) {
  let [newHead, _] = helper(head);
  return newHead;
};

var helper = function(head, prev = null) {
  if (!head) return [null, null];
  if (prev) head.prev = prev;
  let next = head.next;
  let tail = head;
  let current = head;

  if (current.child) {
    let [childHead, childTail] = helper(current.child, current);
    current.child = null;
    current.next = childHead;
    current = childTail;
  }

  if (next) {
    let [nextHead, nextTail] = helper(next, current);
    current.next = nextHead;
    tail = nextTail;
  }

  return [head, tail];
};

//Following solution is naive because you have to traverse to the end of the
//linked list every time so we attach the proper next at the end of the child.
//If there was a lot of children, we would constantly have to traverse to the
//end potentially making it an O(n^2) time complexity and a O(1) space
//complexity.
var flattenNaive = function(head, prev = null) {
  //If head doesn't exist, we return null
  if (!head) return null;
  //If there was a prev node, we need to reassign the current node to have new prev
  if (prev) head.prev = prev;
  //we save the next since we'll need to recursively call on it.
  let next = head.next;
  //a pointer to the current node
  let current = head;
  //if a child exist, we will attempt to attach the current node next to be the child
  if (current.child) {
    let child = head.child;
    //this recursive call will return the head of the singly level linked list
    current.next = flatten(current.child, current);
    //reassign child to be null
    current.child = null;
    //we want to traverse to the end of the linked list so that the next will be assigned
    //appropriately
    while (current.next) {
      current = current.next;
    }
    //PROBLEM this will make our time complexity n^2 because we have to keep traversing to the
    //end of the linked list every time there is a child
  }
  //assign the appropriate next to the current node
  current.next = flatten(next, current);

  return head;
};
