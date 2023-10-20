class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports.generateLinkedList = function generateLinkedList(
  items = [1, 2, 3, 4, 5]
) {
  let node = new ListNode();
  let head = node;

  for (let num of items) {
    node.next = new ListNode(num);
    node = node.next;
  }

  return head.next;
};
