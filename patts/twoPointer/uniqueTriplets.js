/**
 * Given an array of unsorted numbers, find all
 * unique triplets that add up to zero
 *
 * The trick is to first sort the array input,
 * Loop through the input with each iteration being the targetSum
 * Look for a pair that add up to the negative of the target sum
 */

const tripletSum = (arr) => {
  // Sort array.
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    const targetSum = arr[i] * -1;
    const pair = pairSumU(arr, targetSum, i);
    if (pair.length > 0) triplets.push([arr[i], ...pair]);
  }
  return triplets;
};

const pairSumU = (arr, target, startIndex) => {
  let pair = [];
  let left = startIndex + 1;
  let right = arr.length - 1;

  while (left < right) {
    const pairSum = arr[left] + arr[right];
    if (pairSum == target) {
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

// Expected [[-3,1,2], [-2,0,2],[-2,1,1],[-1,0,1]]
console.log(tripletSum([-3, 0, 1, 2, -1, 1, -2]));
