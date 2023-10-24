var findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const expectedIdx = nums[i] - 1;
    if (nums[i] !== nums[expectedIdx]) {
      const toSwap = nums[i];
      nums[i] = nums[expectedIdx];
      nums[expectedIdx] = toSwap;
    } else {
      i++;
    }
  }
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1)
      result.push({
        duplicate: nums[i],
        missing: i + 1,
      });
  }

  return result;
};

// findDisappearedNumbers([3, 5, 4, 1, 2]);
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
