/**
 * a b c a b c b b
 *       ^
 */

const uniqueWithinRange = (start, end, s) => {
  const chars = new Set();
  for (let k = start; k <= end; k++) {
    let char = s[k];
    if (chars.has(char)) {
      return false;
    }
    chars.add(char);
  }
  return true;
};

function lengthOfLongestSubstring(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (uniqueWithinRange(i, j, s)) {
        result = Math.max(result, j - i + 1);
      }
    }
  }
  return result;
}

function longestSubstring(s) {
  let wStart = 0;
  let maxLength = 0;
  const visited = new Set();

  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    while (visited.has(s[wEnd])) {
      // Shrink
      visited.delete(s[wStart]);
      wStart++;
    }
    visited.add(s[wEnd]);
    const length = wEnd - wStart + 1;
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

// longestSubstring("abcad");
// console.log(longestSubstring("abcad"));
// console.log(longestSubstring("bbb"));
console.log(lengthOfLongestSubstring("abcad"));
console.log(lengthOfLongestSubstring("bb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log("----------------------");
console.log(longestSubstring("abcad"));
console.log(longestSubstring("bbbb"));
console.log(longestSubstring("pwwkew"));
