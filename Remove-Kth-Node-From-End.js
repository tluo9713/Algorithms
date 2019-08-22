//Problem is from AlgoExpert
//The problem is to remove the Kth node from the end. The naive solution would
//be to have one pass through the linked list and count how many nodes there
//are in the linked list. Then you can just take the difference and remove that
//node in your second pass. O(n) time and O(1) space complexity. However, you
//can optimize this even more by doing this in one pass. The technique here is
//to use two pointers. First you have your second pointer move k nodes ahead.
//Then you move both the node at the head and the node that is k nodes head
//until the second pointer reaches the end. This way, when the second pointer
//reaches the end, you know your first pointer is at the node to remove. Since
//this is a singly linked list, I made the second pointer go k+1 nodes head, so
//the first pointer will be at the node before the node to remove. Then we
// remove the node. On AlgoExpert there was an extra level of difficulty in that
//they didn't explicitly tell you that you need to remove the node in place and
//not return anything.
//There is also and alternative solution to use recursion, but that's not
//faster as well as will take up more space.

function removeKthNodeFromEnd(head, k) {
  let firstPointer = head;
  let secondPointer = head;
  while (k >= 1) {
    secondPointer = secondPointer.next;
    k--;
  }
  if (secondPointer === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    //Below is the alternate solution if you wanted to return the head of the
    //Linked List that removed the kth node.
    // let solution = head.next
    // return solution
  }
  while (secondPointer.next !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  firstPointer.next = firstPointer.next.next;
  //Return head if you need it
  //return head
}
