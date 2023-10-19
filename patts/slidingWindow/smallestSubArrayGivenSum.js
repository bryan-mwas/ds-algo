/**
 * Given an array of integers, arr, find the size of smallest subarray whose sum is
 * greater than or equal to s
 */
const smallestContiguousSubArray = (arr, s) => {
  let windowStart = 0,
    minSoFar = Infinity,
    windowSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      const windowLength = windowEnd - windowStart + 1;
      minSoFar = Math.min(minSoFar, windowLength);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minSoFar;
};

console.log(smallestContiguousSubArray([1, 3, 2, 2, 4, 5], 6)); // => Expected: 2
console.log(smallestContiguousSubArray([2, 1, 5, 2, 8], 7)); // => Expected: 1
