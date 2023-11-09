const connectedComps = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2, 6, 7],
  6: [],
  7: [],
};

const largestComponent = (graph) => {
  const visited = {};
  let maxSize = 0;
  for (let node in graph) {
    let size = exploreSize(graph, node, visited);
    maxSize = Math.max(size, maxSize);
  }
  return maxSize;
};

// Using DFS
const exploreSize = (graph, src, visited) => {
  if (visited[src]) return 0;
  visited[src] = true;
  let size = 1;

  for (let neighbor of graph[src]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

console.log(largestComponent(connectedComps));
