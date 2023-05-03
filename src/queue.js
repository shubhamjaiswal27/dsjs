class Queue {
  constructor() {
    this.__queue = [];
  }

  enqueue(item) {
    this.__queue.push(item);
  }

  dequeue() {
    return this.__queue.shift();
  }

  peek() {
    return this.__queue[0];
  }

  isEmpty() {
    return this.__queue.length === 0;
  }

  size() {
    return this.__queue.length;
  }
}

export default Queue;
