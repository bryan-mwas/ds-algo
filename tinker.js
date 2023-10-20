const sanitize = (s) => {
  let result = "";
  const lowerString = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (
      (lowerString[i] >= "a" && lowerString[i] <= "z") ||
      (lowerString[i] >= "0" && lowerString[i] <= "9")
    ) {
      result += lowerString[i];
    }
  }
  return result;
};

console.log(sanitize("a33a"));

// (a[2] >= "a" && a[2] <= "z") || (a[2] >= "0" && a[2] <= "9");
