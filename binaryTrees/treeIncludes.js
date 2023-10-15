const { generateTree } = require("./tree");

const treeIncludes = (root, target) => {
  if (!root) return false;
  const q = [root];
  while (q.length) {
    const curr = q.shift();
    if (curr.val === target) return true;
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }

  return false;
};

const treeIncludesDFS = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  const isInLeftTree = treeIncludesDFS(root.left, target);
  const isInRightTree = treeIncludesDFS(root.right, target);
  return isInLeftTree || isInRightTree;
};

// console.log(treeIncludes(generateTree(), 6));
// console.log(treeIncludes(generateTree(), 7));
// console.log(treeIncludes(null, 7));

console.log(treeIncludesDFS(generateTree(), 6));
console.log(treeIncludesDFS(generateTree(), 0));
console.log(treeIncludesDFS(null, 6));
