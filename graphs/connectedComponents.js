const connectedComps = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

function connectedComponentsCount(graph) {
  const visited = {};
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++;
    }
  }

  return count;
}

function explore(graph, src, visited) {
  if (visited[src]) return false;
  visited[src] = true;

  for (let neighbor of graph[src]) {
    explore(graph, neighbor, visited);
  }

  return true;
}

console.log(connectedComponentsCount(connectedComps));
