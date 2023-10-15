const { generateTree } = require("./Node");

const maxRootToLeafPath = (root) => {
  if (!root) return -Infinity;
  // If leaf node return value
  if (!root.left && !root.right) {
    return root.val;
  }
  const sumLeft = maxRootToLeafPath(root.left);
  const sumRight = maxRootToLeafPath(root.right);

  return root.val + Math.max(sumLeft, sumRight);
};

const root = generateTree();
console.log(maxRootToLeafPath(root));
