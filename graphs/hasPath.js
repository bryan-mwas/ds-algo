const { graph2 } = require("./index");

function hasPath(graph, src, dest) {
  if (src === dest) return true;
  for (let neighbor of graph[src]) {
    // Important: Pass the return up the stack
    if (hasPath(graph, neighbor, dest) === true) {
      return true;
    }
  }
  return false;
}

/**
 * Time: O(n * n)
 * Space: O(n)
 */
function hasPathBFS(graph, src, dest) {
  const q = [src];
  while (q.length) {
    const curr = q.shift();
    if (curr === dest) return true;
    for (let neighbor of graph[curr]) {
      q.push(neighbor);
    }
  }
  return false;
}

console.log(hasPath(graph2, "f", "k"));
console.log(hasPath(graph2, "f", "8"));
console.log("=".repeat(5).concat("DFS").concat("=".repeat(5)));
console.log(hasPathBFS(graph2, "f", "k"));
console.log(hasPathBFS(graph2, "f", "8"));
