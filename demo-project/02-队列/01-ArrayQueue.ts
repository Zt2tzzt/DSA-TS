import type { IQueue } from '../type/iqueue'

export class ArrayQueue<T> implements IQueue<T> {
  private data: T[]

  constructor() {
    this.data = []
  }

  enqueue(item: T) {
    this.data.push(item)
  }

  dequeue(): T | undefined {
    return this.data.shift()
  }

  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }

  clear() {
    this.data = []
  }
}

// 示例用法
/* const queue = new ArrayQueue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 输出: 1
console.log(queue.peek()); // 输出: 2
console.log(queue.isEmpty()); // 输出: false
console.log(queue.size()); // 输出: 2

queue.clear();
console.log(queue.isEmpty()); // 输出: true */
