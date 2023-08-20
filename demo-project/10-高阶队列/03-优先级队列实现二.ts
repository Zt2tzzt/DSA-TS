import Heap from '../09-堆结构Heap/06-堆结构Heap（二叉堆）'

class PriorityQueue<T> {
  private heap: Heap<T> = new Heap()

  enqueue(value: T) {
    this.heap.insert(value)
  }

  dequeue(): T | undefined {
    return this.heap.extract()
  }

  peek(): T | undefined {
    return this.heap.peek()
  }

  isEmpty(): boolean {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }
}

export default PriorityQueue

// 测试
class Student {
  constructor(public name: string, public score: number) {}

  valueOf() {
    return this.score
  }
}

const pqueue = new PriorityQueue<Student>()
pqueue.enqueue(new Student('zzt', 90))
pqueue.enqueue(new Student('kobe', 89))
pqueue.enqueue(new Student('james', 95))
pqueue.enqueue(new Student('curry', 88))

while (!pqueue.isEmpty()) {
  console.log(pqueue.dequeue())
}