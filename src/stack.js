class Stack {
  constructor() {
    this.__stack = [];
  }

  push(item) {
    this.__stack.push(item);
  }

  pop() {
    return this.__stack.pop();
  }

  peek() {
    return this.__stack[this.__stack.length - 1];
  }

  isEmpty() {
    return this.__stack.length === 0;
  }

  size() {
    return this.__stack.length;
  }
}

export default Stack;
