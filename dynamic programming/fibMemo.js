function fibMemo(n, memo = {}) {
  if (n == 1) {
    return 1;
  }
  if (n <= 0) return 0;

  if (!memo[n]) {
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  }
  return memo[n];
}

console.log(fibMemo(1));
console.log(fibMemo(0));
console.log(fibMemo(3));
console.log(fibMemo(4));
// console.log(fibMemo(40));
console.log(fibMemo(500));
