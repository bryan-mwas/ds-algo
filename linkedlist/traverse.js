const { generateLinkedList } = require("./linkedlist");

const traverseIterative = (head) => {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
};

const traverseRecursive = (head) => {
  if (head === null) return;
  console.log(head.val);
  traverseRecursive(head.next);
};

const reverseList = (head) => {
  let curr = head,
    prev = null;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const l1 = generateLinkedList();
traverseIterative(l1);
console.log("====Recursive====");
traverseRecursive(l1);
console.log("====ReverseList====");
// console.log(traverseIterative(traverseN(l1)));
console.log(traverseIterative(reverseList(l1)));
