/**
 * Given an array nums and target k
 * Write a function that returns the
 * length of the longest subarray whose
 * sum is less than or equal to the target, k
 */
const longestSum = (nums, k) => {
  let left = 0;
  let maxLength = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    // Shrink window if condition is not met.
    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

// const maxProfit = (prices) => {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
//     }
//   }

//   return maxProfit;
// };

const maxProfit = (prices) => {
  let maxProfit = 0;
  let currProfit = 0;
  let left = 0;

  for (let right = 1; right < prices.length; right++) {
    // Shrink window when price < 0; reset when price is 0
    if (prices[left] > prices[right]) {
      currProfit = 0;
      left = right;
    }
    maxProfit = Math.max(currProfit, prices[right] - prices[left]);
  }

  return maxProfit;
};

// console.log(longestSum([1, 2, 3, 4, 5, 6], 6));
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
