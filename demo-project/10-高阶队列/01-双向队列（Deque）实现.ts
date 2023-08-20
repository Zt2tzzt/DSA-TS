import ArrayQueue from '../02-队列/01-ArrayQueue';

class ArrayDeque<T> extends ArrayQueue<T> {
  addFront(value: T) {
    this.data.unshift(value)
  }

  removeBack(): T | undefined {
    return this.data.pop()
  }
}

// 测试
const deque = new ArrayDeque<string>()
deque.enqueue('aaa')
deque.enqueue('bbb')
deque.enqueue('ccc')
deque.addFront('abc')
deque.addFront('cba')
while (!deque.isEmpty()) {
  console.log(deque.removeBack())
}
