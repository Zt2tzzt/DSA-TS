class Heap<T> {
  data: T[] = []
  private length: number = 0

  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  constructor(arr: T[] = []) {
    this.buildHeap(arr)
  }

  private buildHeap(arr: T[]) {
    this.data = arr
    this.length = arr.length

    for (let i = Math.floor((this.length - 1) / 2 - 1); i >= 0; i--) {
      this.heapfy_down(i)
    }
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
    // 1.判断元素的个数为 0 或者 1 的情况
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }

    // 2.提取返回的最大值
    const topvalue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--
 
    // 3.维护最大堆的特性，下滤操作
    this.heapfy_down(0)

    return topvalue
  }
  private heapfy_down(start: number) {
    let index = start

    while (2 * index + 1 < this.length) {
      // 1.定义索引位置
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = leftChildIndex + 1

      // 2.找到左右子节点较大的值
      let largeIndex = leftChildIndex
      if (rightChildIndex < this.length && this.data[rightChildIndex] > this.data[leftChildIndex]) {
        largeIndex = rightChildIndex
      }

      // 3.较大的之和 index 位置进行比较
      if (this.data[index] >= this.data[largeIndex]) break

      // 4.变换位置
      this.swap(index, largeIndex)
      index = largeIndex
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
const heap = new Heap<number>(arr)

console.log(heap.data)
console.log(heap.extract())
