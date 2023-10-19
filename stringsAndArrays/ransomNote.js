var canConstruct = function (ransomNote, magazine) {
  // Construct respective character counters
  const magazineCounter = charCount(magazine);
  // Compare the counts
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineCounter[ransomNote[i]]) return false;
    if (magazineCounter[ransomNote[i]] < 1) return false;
    magazineCounter[ransomNote[i]] -= 1;
  }
  return true;
};

const charCount = (s) => {
  let counter = {};
  for (let i = 0; i < s.length; i++) {
    if (!counter[s[i]]) {
      counter[s[i]] = 0;
    }
    counter[s[i]]++;
  }
  return counter;
};

console.log(canConstruct("aa", "aab"));
