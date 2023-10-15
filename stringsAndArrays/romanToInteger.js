const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// var romanToIntVerbose = function (s) {
//   let result = 0;
//   for (let i = 0; i < s.length; ) {
//     switch (s[i]) {
//       case "I":
//         if (s[i + 1] === "V") {
//           result += 4;
//           i += 2;
//         } else if (s[i + 1] === "X") {
//           result += 9;
//           i += 2;
//         } else {
//           result += map[s[i]];
//           i += 1;
//         }
//         break;
//       case "X":
//         if (s[i + 1] === "L") {
//           result += 40;
//           i += 2;
//         } else if (s[i + 1] === "C") {
//           result += 90;
//           i += 2;
//         } else {
//           result += map[s[i]];
//           i += 1;
//         }
//         break;
//       case "C":
//         if (s[i + 1] === "D") {
//           result += 400;
//           i += 2;
//         } else if (s[i + 1] === "M") {
//           result += 900;
//           i += 2;
//         } else {
//           result += map[s[i]];
//           i += 1;
//         }
//         break;
//       default:
//         result += map[s[i]];
//         i += 1;
//     }
//   }

//   return result;
// };
var romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = map[s[i]];
    let next = map[s[i + 1]];
    if (curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
};

// console.log(romanToInt("III"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
