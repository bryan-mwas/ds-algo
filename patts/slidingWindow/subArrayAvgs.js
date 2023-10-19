// Runtime => O(n * k) => Polynomial time
function avgSubArraysNaive(arr, k) {
  const averages = [];

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    averages.push(sum / k);
  }

  return averages;
}

function avgSubArrays(arr, k) {
  const averages = [];
  let left = 0,
    right = 0,
    sum = 0;

  while (right < arr.length) {
    sum += arr[right];

    if (right - left + 1 == k) {
      // Update result
      averages.push(sum / k);
      // Shrink window
      sum -= arr[left];
      left++;
    }

    right++;
  }

  return averages;
}
console.log(avgSubArrays([1, 2, 3], 2)); // Expected => [1.5, 2.5]
console.log(avgSubArrays([1, 2, 3, 4, 5], 3)); // Expected => [2,3,4]

console.log(avgSubArrays([1, 2, 3, 4, 5], 2)); // Expected => [1.5,2.5,3.5,4,5]
console.log(avgSubArrays([1, 2, 3, 4, 5], 4)); // Expected => [2.5,3.5]
console.log(avgSubArrays([1, 2, 3, 4, 5], 6)); // Expected => []
