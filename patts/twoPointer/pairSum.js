const pairSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let pair = null;

  // convergence means there is no pair
  while (left != right) {
    const pairSum = arr[left] + arr[right];
    if (pairSum === target) {
      pair = [arr[left], arr[right]];
      break;
    } else if (pairSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return pair;
};

console.log(pairSum([1, 2, 3, 4, 5, 6, 7], 9)); // =>[2,7]
console.log(pairSum([3, 4, 5, 6, 7], 14)); // => null
console.log(pairSum([3, 4, 5, 6, 7], 11)); // => [4,7]
console.log(pairSum([3, 4, 5, 6, 7], 9)); // => [3,6]
