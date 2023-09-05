class Heap<T> {
  data: T[] = []
  private length: number = 0

  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  insert(value: T) {
    // 1.将元素放到数组的尾部
    this.data.push(value)
    this.length++

    // 2.上滤操作，维护最大堆的特性
    this.heapfy_up()
  }
  private heapfy_up() {
    let index = this.length - 1

    while (index > 0) {
      let parentIndex = Math.floor(index / 2 - 1)

      if (this.data[index] <= this.data[parentIndex]) break

      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

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

export default Heap

// 测试
const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
const heap = new Heap<number>()
for (const item of arr) {
  heap.insert(item)
}
console.log(heap.data)

heap.insert(133)
console.log(heap.data)
heap.insert(65)
console.log(heap.data)

