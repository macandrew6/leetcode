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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {

    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;

  }

  return List.next;
};
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

let l2 = new ListNode(3);
l2.next = new ListNode(2);
l2.next.next = new ListNode(1);
console.log(addTwoNumbers(l1, l2));