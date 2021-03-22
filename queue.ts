/* Queues: FIFO */
class Queue {
  // storage
  collection: any[] = [];

  // enqueue
  enqueue(item: any) {
    this.collection.push(item);
  }
  // dequeue
  dequeue(item: any) {
    return this.collection.shift();
  }
  // print
  print() {
    console.log(this.collection);
  }
  // front
  front() {
    return this.collection[0];
  }
  // size
  size() {
    return this.collection.length;
  }
  // check empty
  isEmpty(): boolean {
    return this.collection.length <= 0;
  }
}

let queue = new Queue();

queue.enqueue("Brian");
queue.enqueue("Mwathi");
console.log("SIZE", queue.size());
console.log(queue.isEmpty());
queue.print();

console.log("FRONT", queue.front());
queue.dequeue("Brian");
queue.dequeue("Mwathi");
queue.enqueue("Wangome");
console.log("SIZE", queue.size());
console.log(queue.isEmpty());
queue.print();
