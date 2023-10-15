const { edges } = require("./index");

const edgeToGraph = (edges) => {
  return edges.reduce((acc, curr) => {
    if (!acc[curr[0]]) {
      acc[curr[0]] = [];
    }
    if (!acc[curr[1]]) {
      acc[curr[1]] = [];
    }
    acc[curr[0]].push(curr[1]);
    acc[curr[1]].push(curr[0]);
    return acc;
  }, {});
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = edgeToGraph(edges);
  const visited = new Set();
  return hasPathDFS(graph, nodeA, nodeB, visited);
};

const hasPath = (graph, src, dest) => {
  const q = [src];
  const visited = {};
  while (q.length) {
    const curr = q.shift();
    visited[curr] = true;
    if (curr === dest) return true;

    for (let neighbor of graph[curr]) {
      if (visited[neighbor]) continue;
      q.push(neighbor);
    }
  }
  return false;
};

const hasPathDFS = (graph, src, dest, visited) => {
  if (src === dest) return true;
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (neighbor === dest) return true;
    hasPathDFS(graph, neighbor, dest, visited);
  }

  return false;
};

console.log(undirectedPath(edges, "k", "l"));
console.log(undirectedPath(edges, "k", "j"));
console.log(undirectedPath(edges, "m", "o"));
console.log(undirectedPath(edges, "n", "o"));
