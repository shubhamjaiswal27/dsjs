import { expect } from "chai";
import { Queue } from "../src";

describe("Queue data structure", () => {
  const items = [10, 20, 30, 40];
  const queue = new Queue();

  beforeEach(() => {
    items.forEach((elm) => queue.enqueue(elm));
  });

  afterEach(() => {
    while (!queue.isEmpty()) queue.dequeue();
  });

  it("should be able to push items to queue.", () => {
    expect(queue.size()).eq(items.length);
  });

  it("should be able to pop items from queue in FIFO.", () => {
    expect(queue.size()).eq(items.length);
    expect(queue.dequeue()).eq(items[0]);
    expect(queue.dequeue()).eq(items[1]);
    expect(queue.size()).eq(items.length - 2);
  });

  it("should be able return whether queue is empty.", () => {
    expect(queue.size()).eq(items.length);
    expect(queue.isEmpty()).eq(false);
  });

  it("should be able return top item in queue.", () => {
    expect(queue.size()).eq(items.length);
    expect(queue.peek()).eq(items[0]);
  });
});
