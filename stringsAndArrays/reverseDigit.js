var reverse = function (x) {
  const upperBound = 2 ** 31 + 1;
  const lowerBound = -(2 ** 31);

  if (x < 0) {
    const reverse = -1 * getReverse(Math.abs(x));
    return reverse > lowerBound ? reverse : 0;
  }
  const reverse = getReverse(x);
  return reverse < upperBound ? reverse : 0;
};

const getReverse = (num) => {
  let reverse = 0;
  let quotient = num;

  while (quotient > 0) {
    const remainder = quotient % 10;
    reverse = remainder + 10 * reverse;
    quotient = Math.floor(quotient / 10);
  }

  return reverse;
};

console.log(reverse(1534236469)); // Expected => 0
