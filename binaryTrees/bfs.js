const { generateTree } = require("./tree");

function bfs(node) {
  if (!node) return node;
  const toVisit = [node];
  while (toVisit.length) {
    const current = toVisit.shift();
    console.log(current.val);
    if (current.left) toVisit.push(current.left);
    if (current.right) toVisit.push(current.right);
  }
}

const root = generateTree();

bfs(root);
bfs(null);
