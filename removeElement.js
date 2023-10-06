// const removeElement = function (nums, val) {
//   let value_counter = 0;
//   let swap_pointer = nums.length - 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums[i] = "_";
//       // Swap
//       if (nums[swap_pointer] !== "_") {
//         if (nums[swap_pointer] === val) {
//           nums[swap_pointer] = "_";
//         } else {
//           nums[i] = nums[swap_pointer];
//           nums[swap_pointer] = "_";
//         }
//         swap_pointer--;
//       }
//     } else {
//       value_counter++;
//     }
//   }
//   console.log(nums);
//   return value_counter;
// };

const removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  console.log(nums);
  return index;
};
// console.log(removeElement([1, 2, 4, 5, 3, 4, 4, 8], 4));

// console.log(removeElement([3, 2, 2, 3], 3));

const twoSum = function (nums, target) {
  // Brute force - Polynomial runtime O(n^2)
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i+1; j < nums.length; j++) {
  //         if(nums[i] + nums[j] == target) return [i ,j]
  //     }
  // }

  // Optimized using a map/hashtable: { num: index }
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const remainderToTarget = target - nums[i];
    if (hashTable[remainderToTarget]) {
      console.log("Bingo", [i]);
      return [i, hashTable[remainderToTarget]];
    } else {
      hashTable[nums[i]] = i;
    }
    console.log(hashTable);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
