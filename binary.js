var search = function (nums, target) {
  let lower = 0;
  let upper = nums.length - 1;

  while (upper - lower > 0) {
    let center = Math.floor((upper + lower) / 2);
    if (nums[center] === target) return center;
    else if (nums[center] > target) {
      upper = center - 1;
    } else {
      lower = center + 1;
    }
  }

  let center = Math.floor((upper + lower) / 2);

  return nums[center] === target ? center : -1;
};

console.log(search([2, 5], 0));
console.log(search([-1, 0, 3, 5, 9, 12], 12));
