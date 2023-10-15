class TreeNode {
  constructor(val) {
    (this.val = val), (this.left = undefined);
    this.right = undefined;
  }
}

const generateTree = (nums = [1, 2, 3, 4, 5, 6]) => {
  const root = new TreeNode(nums[0]);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(6);
  return root;
};

module.exports = {
  generateTree,
};
