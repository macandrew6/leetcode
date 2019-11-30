/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single 
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. 
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let addTwoNumbers = (l1, l2) => {
  // init current node to dummy head of the returning list
  // init carry to 0
  // init p and q to head of l1 and l2 respectively.
  // loop through l1 and l2 until you reach both ends.
    // set x to node p's value. if p has reached the end of l1 set to 0
    // set y to node q's value. if q has reached the end of l2 set to 0
    // set sum = x + y + carry.
    // update carry = sum / 10
    // create a new node with the digit value of (sum mod 10) and set it to 
    // current nod's next, then advance current note to next
    // advance both p and q
  // check if carry = 1, if so append a new node with digit 1 to the returning 
  // list
  // return dummy head's next node

  let dummyHead = new ListNode(0)
  let curr = dummyHead
  let carry = 0
  while (l1 != null || l2 != null) {
    sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    l1 = (l1 ? l1.next : l1)
    l2 = (l2 ? l2.next : l2)
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dummyHead.next
};

console.log(addTwoNumbers([1, 2, 3], [3, 2, 1]));