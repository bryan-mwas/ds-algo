const { generateTree } = require("./tree");

function dfs(root) {
  if (!root) return;
  console.log(root.val);
  dfs(root.left);
  dfs(root.right);
}

function dfs(root) {
  if (!root) return [];
  const leftValues = dfs(root.left);
  const rightValues = dfs(root.right);
  return [root.val, ...leftValues, ...rightValues];
}

console.log(dfs(generateTree()));
console.log(dfs(null));
