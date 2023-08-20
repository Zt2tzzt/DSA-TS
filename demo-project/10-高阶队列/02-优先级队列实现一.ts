import Heap from '../09-堆结构Heap/06-堆结构Heap（二叉堆）'

class PriorityNode<T> {
  constructor(public value: T, public priority: number) {}

  valueOf() {
    return this.priority
  }
}

class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()

  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode(value, priority)
    this.heap.insert(newNode)
  }

  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }

  peek(): T | undefined {
    return this.heap.peek()?.value
  }

  isEmpty(): boolean {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }
}

const pqueue = new PriorityQueue<string>()
pqueue.enqueue('zzt', 98)
pqueue.enqueue('kobe', 90)
pqueue.enqueue('james', 105)
while (!pqueue.isEmpty()) {
  console.log(pqueue.dequeue())
}

export default PriorityQueue