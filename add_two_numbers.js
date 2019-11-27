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

let addTwoNumbers = (l1, l2) => {
  let num1 = '';
  let num2 = '';
  for (let i = l1.length - 1; i >= 0; i--) {
    num1 += l1[i];
  }

  for (let i = l2.length - 1; i >= 0; i--) {
    num2 += l2[i];
  }
  // console.log(num1);
  return (parseInt(num1) + parseInt(num2)).toString().split('').map(Number);
};

console.log(addTwoNumbers([1, 2, 3], [3, 2, 1]));