function combinations(list) {
  if (list.length === 0) return [[]];
  const [firstElement, ...rest] = list;
  const combiWithoutFirst = combinations(rest);
  const combiWithFirstEl = combiWithoutFirst.map((combi) => {
    return [...combi, firstElement];
  });
  return [...combiWithoutFirst, ...combiWithFirstEl];
}

// console.log("=======");
// console.log(combinations([1, 5, 3]));
// console.log("=======");
console.log(combinations([5, 3]));
// console.log("=======");
// console.log(combinations([3]));
// console.log("=======");
// console.log(combinations([]));
// console.log("=======");
