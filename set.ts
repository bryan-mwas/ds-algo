class MySet {
  // Configure the storage
  storage: any[] = [];
  // Add items to the set
  add(item: any) {
    if (!this.has(item)) {
      this.storage.push(item);
    }
  }

  values(): any[] {
    return this.storage;
  }

  remove(item: any) {
    const removeIndex = this.storage.indexOf(item);
    if (removeIndex !== -1) {
      this.storage.splice(removeIndex, 1);
    }
    return this.values();
  }
  // Check if item is already in storage
  has(item: any) {
    return this.storage.includes(item);
  }
  // Join two sets and return them
  join(otherSet: MySet): MySet {
    let result: MySet = new MySet();

    this.storage.forEach((it) => {
      result.add(it);
    });

    otherSet.storage.forEach((item) => {
      result.add(item);
    });

    return result;
  }

  // Difference
  difference(otherSet: MySet): MySet {
    let result = new MySet();
    this.storage.forEach((item) => {
      if (!otherSet.has(item)) {
        result.add(item);
      }
    });

    otherSet.storage.forEach((item) => {
      if (!this.has(item)) {
        result.add(item);
      }
    });
    return result;
  }

  // Return common item in between two sets
  intersection(otherSet: MySet): any[] {
    let result: any[] = [];
    otherSet.storage.forEach((item) => {
      if (this.has(item)) {
        result.push(item);
      }
    });
    return result;
  }
  // Check if Set A is contained in Set B
  isSubset(otherSet: MySet) {
    return this.storage.every((item) => otherSet.storage.includes(item));
  }
}

const set1 = new MySet();
const set2 = new MySet();

set1.add(12);
set1.add(13);
set1.add(14);

set2.add(10);
set2.add(11);
set2.add(12);

console.log("SET 1", set1.values());
console.log("SET 2", set2.values());

console.log("INTERSECTION", set1.intersection(set2));
console.log("DIFF(unionSet, set2)", set1.difference(set2).values());

const unionSet = set1.join(set2);
console.log("JOIN", unionSet.values());

console.log("IS SUBSET");
console.log("set2 is a subset of unionSet", set2.isSubset(unionSet));
console.log("unionSet is a subset of set2", unionSet.isSubset(set2));
console.log("Remove", unionSet.remove(12));

let setC = new Set();
let setD = new Set();

setC.add("A");
setC.add("B");
setC.add("C");

setD.add("D");
setD.add("E");
setD.add("F");

console.log(setD.values());

setC.delete("A");
console.log(setC.values());
console.log(setC.has("A"));
