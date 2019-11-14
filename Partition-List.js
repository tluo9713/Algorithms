//https://leetcode.com/problems/partition-list/

//Given a linked list and a value x, partition it such that all nodes
//less than x come before nodes greater than or equal to x.

//You should preserve the original relative order of the nodes in each of
//the two partitions.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/* *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

//While this might be hard to tackle first, there is a neato trick you can
//apply here. You can create two new heads of linked list, each representing
//either less than the x or more than or equal to x linked list. Now as you
//traverse the linked list, you just add them to their respective linked
//list (making sure to assign the end of tail to have null as next). When you
//traverse to the end of the linked list, just attach the tail of the lesser
//linked list to the head of the more or equal linked list. Then you can
//return the head of the lesser.next and now you have it reordered.
var partition = function(head, x) {
  let lessHead = new ListNode(null);
  let moreOrEqualHead = new ListNode(null);
  let currLess = lessHead;
  let currMore = moreOrEqualHead;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = null;
    if (curr.val < x) {
      currLess.next = curr;
      currLess = curr;
    } else {
      currMore.next = curr;
      currMore = curr;
    }
    curr = next;
  }
  currLess.next = moreOrEqualHead.next;
  return lessHead.next;
};
