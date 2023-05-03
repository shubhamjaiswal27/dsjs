import { expect } from "chai";
import { Stack } from "../src";

describe("Stack data structure", () => {
  const items = [10, 20, 30, 40];
  const stack = new Stack();

  beforeEach(() => {
    items.forEach((elm) => stack.push(elm));
  });

  afterEach(() => {
    while (!stack.isEmpty()) stack.pop();
  });

  it("should be able to push items to stack.", () => {
    expect(stack.size()).eq(items.length);
  });

  it("should be able to pop items from stack in LIFO.", () => {
    expect(stack.size()).eq(items.length);
    expect(stack.pop()).eq(items[items.length - 1]);
    expect(stack.pop()).eq(items[items.length - 2]);
    expect(stack.size()).eq(items.length - 2);
  });

  it("should be able return whether stack is empty.", () => {
    expect(stack.size()).eq(items.length);
    expect(stack.isEmpty()).eq(false);
  });

  it("should be able return top item in stack.", () => {
    expect(stack.size()).eq(items.length);
    expect(stack.peek()).eq(items[items.length - 1]);
  });
});
