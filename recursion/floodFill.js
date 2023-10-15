var floodFill = function (image, sr, sc, color) {
  if (image.length === 0) {
    return image;
  }
  const fromColor = image[sr][sc];
  if (fromColor === color) {
    return image;
  }
  dfs(image, sr, sc, fromColor, color);
  return image;
};

function dfs(image, x, y, fromColor, toColor) {
  if (x < 0 || y < 0 || x >= image.length || y >= image[x].length) {
    return;
  }
  if (image[x][y] === fromColor) {
    image[x][y] = toColor;
  } else {
    return; // if
  }
  dfs(image, x + 1, y, fromColor, toColor); // bottom
  dfs(image, x - 1, y, fromColor, toColor); // top
  dfs(image, x, y + 1, fromColor, toColor); // right
  dfs(image, x, y - 1, fromColor, toColor); // left
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
);
