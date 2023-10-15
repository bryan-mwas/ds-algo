const maxSubArray = function (nums) {
  let max = nums[0];
  let currentSubarray = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSubarray = Math.max(nums[i], currentSubarray + nums[i]);
    max = Math.max(max, currentSubarray);
  }

  return max;
};

const maxSubArray2 = function (nums) {
  let maxSum = -Infinity;
  let currSum = 0;
  let s = 0,
    start = 0,
    end = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
      start = s;
      end = i;
    }
    // Reset our starting point
    if (currSum < 0) {
      currSum = 0;
      s = i + 1;
    }
  }

  console.log(`Subarray starts at ${start} and ends at ${end}`);
  return maxSum;
};

// console.log(maxSubArray([-1, -3, -2]));
// console.log(maxSubArray([-1, -3, 2]));
console.log(maxSubArray2([-2, 3, -1, 2]));
console.log(maxSubArray2([-2, -3]));
