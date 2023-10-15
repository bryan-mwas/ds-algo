function repeatedString(s, n) {
  // Write your code here
  // I use the quotient and remainder
  const stringLength = s.length;
  const repeatSequence = Math.floor(n / stringLength);
  const remainder = n % stringLength;
  const remainderSeq = s.slice(0, remainder);

  return countAppearance(s) * repeatSequence + countAppearance(remainderSeq);
}

function countAppearance(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}

console.log(repeatedString("aba", 10));
