function hourGlassSum(table) {
  let maxSum = -Infinity;
  for (let row = 0; row < table.length; row++) {
    if (table[row + 2] === undefined) break;
    for (let column = 0; column < table[row].length; column++) {
      if (table[row][column + 2] === undefined) break;
      let sum = 0;
      sum +=
        table[row][column] +
        table[row][column + 1] +
        table[row][column + 2] +
        table[row + 1][column + 1] +
        table[row + 2][column] +
        table[row + 2][column + 1] +
        table[row + 2][column + 2];
      console.log(sum);
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

console.log(
  "Max sum is: ",
  hourGlassSum([
    [1, 2, 3, 10, 11, 12],
    [4, 5, 6, 13, 14, 15],
    [7, 8, 9, 16, 17, 18],
  ])
);

console.log(
  "Max sum is: ",
  hourGlassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])
);
