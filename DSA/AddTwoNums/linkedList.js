class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
   

  while (l1 !== null || l2 !== null || carry > 0) {
    console.log(l1);
    console.log(l2);
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    console.log(x);
    console.log(y);

    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    current.next = new ListNode(digit);
    // console.log(current)
    current = current.next;
    // console.log(current)
    console.log(l1);
    console.log(l2);
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    console.log(l1);
    console.log(l2);
  }

  return dummyHead.next;
}

function printList(node) {
  let output = '';
  while (node !== null) {
    output += node.val;
    if (node.next !== null) output += ' -> ';
    node = node.next;
  }
  console.log(output);
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const result = addTwoNumbers(l1, l2);
printList(result);
