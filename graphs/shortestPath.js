const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["a", "v"],
  ["w", "v"],
];

const shortestPath = (e, n1, n2) => {
  const adjList = e.reduce((acc, curr) => {
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

  console.log(adjList);
  return bfs(adjList, n1, n2);
};

const bfs = (graph, start, target) => {
  const q = [[start, 0]];
  const visited = new Set();

  while (q.length > 0) {
    const [currentVal, currPathSize] = q.shift();
    visited.add(currentVal);
    if (currentVal === target) {
      return currPathSize;
    }
    for (let neighbor of graph[currentVal]) {
      if (!visited.has(neighbor)) {
        q.push([neighbor, currPathSize + 1]);
      }
    }
  }
  return -1;
};

console.log(shortestPath(edges, "w", "z"));
console.log(shortestPath(edges, "w", "a"));
console.log(shortestPath(edges, "w", "y"));
