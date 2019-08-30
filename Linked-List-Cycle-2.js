/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//https://leetcode.com/problems/linked-list-cycle-ii/
//This problem could be solved easily by having a hash table that records
//every value we have seen. Then when we see a value we have seen before, we can
//return that value and we have our solution. This is O(n) time and O(n) space
//as we have to store every node we seen. There is a slightly more optimized
//solution for space. What if we had two pointers, and one pointer moves at
//a speed of 2 nodes, while the other pointer moves only one node at a time.
//If the fast node ever reaches null, we know this is not a cycle. If there is
//a cycle, there will be an overlap at some point where both pointers point to
//the same node. This node isn't always guarenteed to be the start of the cycle.
//What you could do is move one of the pointers back to the head and move both
//pointers at the speed of one node at a time, and then when they overlap, they
//will ALWAYS be at the start of the cycle. The proof of this is beyond the
//scope of this algo, but there is a nice visual way of proving this.
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let hare = head;
  let tortoise = head;
  while (hare !== null) {
    hare = hare.next;
    if (!hare) return null;
    hare = hare.next;
    if (!hare) return null;
    tortoise = tortoise.next;
    if (hare === tortoise) break;
  }
  hare = head;
  while (hare !== tortoise) {
    hare = hare.next;
    tortoise = tortoise.next;
  }
  return hare;
};
