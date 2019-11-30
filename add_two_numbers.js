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

  let carryOver = 0;
  const rootNode = new ListNode(null);
  let nodeIterator = rootNode;
  let currentVal;

  while (l1 || l2) {
    if (l1 && l2) {
      currentVal = l1.val + l2.val + carryOver;
    } else if (l1) {
      currentVal = l1.val + carryOver;
    } else {
      currentVal = l2.val + carryOver;
    }

    carryOver = Math.floor(currentVal / 10);

    const newNode = new ListNode(currentVal % 10);
    nodeIterator.next = newNode;
    nodeIterator = nodeIterator.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }


  if (carryOver) nodeIterator.next = new ListNode(1);

  return rootNode.next;
};

console.log(addTwoNumbers([1, 2, 3], [3, 2, 1]));