function jumpingOnClouds(c) {
  // Write your code here
  let moves = 0;

  for (let i = 0; i < c.length - 1; ) {
    if (c[i + 2] === 0) {
      moves++;
      console.log("Moving 2 steps");
      i += 2;
    } else if (c[i + 1] === 0) {
      moves++;
      console.log("Moving 1 step");
      i += 1;
    }
  }

  return moves;
}

// function jumpingOnClouds(c) {
//   // Write your code here
//   let moves = 0;
//   let i = 0;

//   while (i < c.length - 1) {
//     if (c[i + 2] === 0) {
//       console.log("Moving 2 steps");
//       i += 2;
//     } else if (c[i + 1] === 0) {
//       console.log("Moving 1 step");
//       i += 1;
//     }
//     moves++;
//   }

//   return moves;
// }

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
