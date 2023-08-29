class Heap<T> {
  // 属性
  private data: T[] = []
  private length: number = 0

  private swap(i: number, j: number) {
    /* const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp */

    // 使用 ES6 的解构赋值，来实现元素的交换
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  insert(value: T) {}

  extract(): T | undefined {
    return undefined
  }

  peek(): T | undefined {
    return this.data[0]
  }
  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  buildHeap(arr: []) {}
}
