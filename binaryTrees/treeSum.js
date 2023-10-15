const { generateTree } = require("./tree");

/**
 *
 * @param {*} root
 * Time Complexity: O(n) -> no. of nodes
 * Space Complexity: O(n) -> Call stack
 */
const treeSumDFS = (root) => {
  if (!root) return 0;
  const leftSum = treeSumDFS(root.left);
  const rightSum = treeSumDFS(root.right);
  return root.val + leftSum + rightSum;
};

const treeMinDFS = (root) => {
  if (!root) return Infinity;
  const minLeft = treeMinDFS(root.left);
  const minRight = treeMinDFS(root.right);
  return Math.min(root.val, minLeft, minRight);
};

console.log(treeSumDFS(generateTree()));

console.log(treeMinDFS(generateTree()));
