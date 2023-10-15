const sampleInput = [1, 2, 3, 4];

/**
 *
 * @input [1,2,3,4]
 * @output [24, 12, 8, 6]
 * Time complexity: O(n ^ 3) polynomial time
 * Space complexity: O()
 */
function bruteForce(list) {
  const result = new Array(list.length).fill(1);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      result[i] *= list[j];
    }
    for (let k = i - 1; k > -1; k--) {
      result[i] *= list[k];
    }
  }
  return result;
}

// const productBeforeItem = (arr) => {}
// const productAfterItem = (arr) => {}
/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function optimized(arr) {
  // track running product
  let runningProductAfter = 1;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = runningProductAfter;
    runningProductAfter *= arr[i];
  }

  // track running product for before values
  let runningProductBefore = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] = runningProductBefore * result[j];
    runningProductBefore *= arr[j];
  }

  return result;
}

console.log(bruteForce([1, 2, 3, 4]));
console.log(bruteForce([9, 8, 6, 7]));

console.log(optimized([1, 2, 3, 4]));
console.log(optimized([9, 8, 6, 7]));
