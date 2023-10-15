const { graph } = require("./index");

const dfsPrint = (graph, start) => {
  const stack = [start];
  while (stack.length) {
    const curr = stack.pop();
    console.log(curr);
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
};

const dfsRecursive = (graph, start) => {
  console.log(start);
  // NOTE: Implict base case i.e. when no neighbors are found. No recursive call is made
  for (let neighbor of graph[start]) {
    dfsRecursive(graph, neighbor);
  }
};
const bfsPrint = (graph, start) => {
  const q = [start];
  while (q.length) {
    const curr = q.shift();
    console.log(curr);
    for (let neighbor of graph[curr]) {
      q.push(neighbor);
    }
  }
};

// dfsPrint(graph, "a");
// console.log("==========Recursive DFS==========");
dfsRecursive(graph, "a");
console.log("==========BFS==========");
bfsPrint(graph, "a");
