function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(40));
console.log(fib(500));
