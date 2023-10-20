const { generateLinkedList } = require("./linkedlist");

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

const l1 = generateLinkedList([-9, 3]);
const l2 = generateLinkedList([5, 7]);

console.log(mergeTwoLists(l1, l2));
