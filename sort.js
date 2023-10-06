function qsort(arr = []) {
  if (arr.length == 1) {
    return arr[0];
  }
  if (arr.length <= 0) {
    return [];
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const less = arr.reduce((acc, curr) => {
    if (curr < pivot) {
      acc.push(curr);
    }
    return acc;
  }, []);
  const greater = arr.reduce((acc, curr) => {
    if (curr > pivot) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return res.concat(qsort(less), pivot, qsort(greater));
}

console.log(qsort([4, 3, 2]));
console.log(qsort([6, 9, 10, 14, 18]));
