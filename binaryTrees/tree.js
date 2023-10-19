class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this; // Duplicates are not allowed in BST, so we do nothing
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.val) {
        return true;
      }
      if (value < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  inorderTraversal(node, result) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// const generateTree = (nums = [1, 2, 3, 4, 5, 6]) => {
//   const root = new TreeNode(nums[0]);
//   root.left = new TreeNode(2);
//   root.left.left = new TreeNode(4);
//   root.left.right = new TreeNode(5);
//   root.right = new TreeNode(3);
//   root.right.left = new TreeNode(6);
//   return root;
// };

function generateBinaryTreeFromArray(arr = [1, 2, 3, 4, 5, 6]) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];

  for (let i = 1; i < arr.length; i += 2) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }

    if (arr[i + 1] !== null && i + 1 < arr.length) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }

  return root;
}
const generateBST = (nums = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]) => {
  const bst = new BinarySearchTree();
  for (let val of nums) {
    bst.insert(val);
  }
  return bst;
};

module.exports = {
  generateTree: generateBinaryTreeFromArray,
  root: generateBST(),
};
