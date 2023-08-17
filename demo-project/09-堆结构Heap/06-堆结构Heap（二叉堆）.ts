class Heap<T> {
  data: T[] = []
  private length: number = 0
  private isMax: boolean

  constructor(arr: T[] = [], isMax: boolean = true) {
    this.isMax = isMax
    if (!arr.length) return
    this.buildHeap(arr)
  }

  private buildHeap(arr: T[]) {
    this.data = arr
    this.length = arr.length

    for (let i = Math.floor((this.length - 2) / 2); i >= 0; i--) {
      this.heapfy_down(i)
    }
  }

  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  private compare(i: number, j: number): boolean {
    if (this.isMax) {
      return this.data[i] >= this.data[j]
    } else {
      return this.data[i] <= this.data[j]
    }
  }

  insert(value: T) {
    // 1.将元素放到数组的尾部
    this.data.push(value)
    this.length++

    // 2.上滤操作，维护最小堆的特性
    this.heapfy_up()
  }
  private heapfy_up() {
    let index = this.length - 1

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)

      if (this.compare(parentIndex, index)) break
      // if (this.data[parentIndex] <= this.data[index]) break

      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  extract(): T | undefined {
    // 1.判断元素的个数为 0 或者 1 的情况
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }

    // 2.提取返回的最小值
    const topvalue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--
 
    // 3.维护最小堆的特性，下滤操作
    this.heapfy_down(0)

    return topvalue
  }
  private heapfy_down(start: number) {
    let index = start

    while (2 * index + 1 < this.length) {
      // 1.定义索引位置
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = leftChildIndex + 1

      // 2.找到左右子节点较小的值
      let nextIndex = leftChildIndex
      if (rightChildIndex < this.length && this.compare(rightChildIndex, leftChildIndex)) {
      // if (rightChildIndex < this.length && this.data[rightChildIndex] < this.data[leftChildIndex]) {
        nextIndex = rightChildIndex
      }

      // 3.较小的之和 index 位置进行比较
      if (this.compare(index, nextIndex)) break
      // if (this.data[index] <= this.data[nextIndex]) break

      // 4.变换位置
      this.swap(index, nextIndex)
      index = nextIndex
    }
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
}

export default Heap

// 测试
const arr = [9, 11, 20, 56, 23, 45]
const heap = new Heap<number>(arr, false)

console.log(heap.data)
console.log(heap.extract())
