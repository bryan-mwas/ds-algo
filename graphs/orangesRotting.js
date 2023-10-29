var orangesRotting = function (grid) {
  // Perform a BFS
  // Use a queue
  const q = [];
  const visited = new Set();
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  //   for (let row of grid) {
  //     for (let val of row) {
  //       if (val === 2) {
  //         // perform bfs
  //         q.push(val);
  //         while (q.length > 0) {
  //           const curr = q.shift();
  //           for(let [row, col] of directions) {

  //           }
  //         }
  //       }
  //     }
  //   }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (val === 2) {
        // perform bfs
        q.push(val);
        while (q.length > 0) {
          const curr = q.shift();
          for (let [row, col] of directions) {
            const withinBounds =
              r + row >= 0 &&
              r + row <= grid.length &&
              c + col >= 0 &&
              c + col <= grid[r].length;

            if (!withinBounds) continue;
          }
        }
      }
    }
  }
};

const explore = (m, sr, sc) => {
  const withinBounds =
    sr >= 0 && sr <= m.length && sc >= 0 && sc <= m[0].length;
  if (!withinBounds) return;
};

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
