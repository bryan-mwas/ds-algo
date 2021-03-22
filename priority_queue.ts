const PriorityQueue = class {
  storage: any[] = [];
  // print
  print = () => {
    console.log(this.storage);
  };

  /**
   * Enqueue:
   * (This allows dequeue have same impl. as queue)
   * Compare the priority of incoming element,
   * if the priority value is less than existing,
   * the incoming element is placed before exiting element,
   */
  enqueue = (element: any[]) => {
    // Check if element has been inserted to avoid double entry and allows for entry of first element
    let isAdded = false;
    for (let index = 0; index < this.storage.length; index++) {
      const storedElement = this.storage[index];
      if (element[1] < storedElement[1]) {
        isAdded = true;
        this.storage.splice(index, 0, element);
        break;
      }
    }
    if (!isAdded) {
      this.storage.push(element);
    }
  };

  dequeue = () => {
    return this.storage.shift();
  };

  first = () => {
    return this.storage[0];
  };

  isEmpty = (): boolean => {
    return this.storage.length < 1;
  };

  size = () => {
    return this.storage.length;
  };
};

const pq = new PriorityQueue();

pq.enqueue(["Brian", 1]);
pq.enqueue(["Wangome", 3]);
pq.enqueue(["Mwathi", 2]);
pq.enqueue(["Mwathi", 1]);
console.log("SIZE", pq.size());
console.log(pq.isEmpty());
pq.print();
