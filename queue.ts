/* Queues: FIFO */
class Queue {
  // storage
  static collection: any[] = [];

  // enqueue
  enqueue(item: any) {
    Queue.collection.push(item);
  }
  // dequeue
  dequeue(item: any) {
    return Queue.collection.shift();
  }
  // print
  print() {
    console.log(Queue.collection);
  }
  // front
  front() {
    return Queue.collection[0];
  }
  // size
  size() {
    return Queue.collection.length;
  }
  // check empty
  isEmpty(): boolean {
    return Queue.collection.length <= 0;
  }
}

let queue = new Queue();

queue.enqueue("Brian");
queue.enqueue("Mwathi");
console.log("SIZE", queue.size());
console.log(queue.isEmpty());
queue.print();

queue.dequeue("Brian");
queue.dequeue("Mwathi");
queue.enqueue("Wangome");
console.log("SIZE", queue.size());
console.log(queue.isEmpty());
queue.print();
