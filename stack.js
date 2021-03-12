let Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds value to end of the stack
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns value at the end of the stack
  this.pop = () => {
    if (this.count === 0) return undefined; // Prevents the index going beyond 0
    this.count--;
    let popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  };

  // Display the top most item in the stack
  this.peek = () => {
    return this.storage[this.count - 1];
  };

  this.size = () => {
    return this.count;
  };
};

let stack = new Stack();

module.exports = { stack };
