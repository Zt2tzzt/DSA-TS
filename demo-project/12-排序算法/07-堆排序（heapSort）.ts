import { swap, testSort, measureSort } from 'hy-algokit';

export default function heapSort(arr: number[]): number[] {
  const n = arr.length

  // 对 arr 原地建堆，自下而上的下滤
  const lastNonLeafNode = Math.floor((n - 1) / 2 - 1)
  for (let i = lastNonLeafNode; i >= 0; i--) {
    heapfy_down(arr, n, i)
  }

  // 对最大堆，进行排序操作
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapfy_down(arr, i, 0)
  }

  return arr
}

function heapfy_down(arr: number[], n: number, index: number) {
  while (2 * index + 1 < n) {
    // 1.定义索引位置
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = leftChildIndex + 1

    // 2.找到左右子节点较小的值
    let largeIndex = leftChildIndex
    if (rightChildIndex < n && arr[rightChildIndex] > arr[leftChildIndex]) {
      largeIndex = rightChildIndex
    }

    // 3.较小的之和 index 位置进行比较
    if (arr[index] >= arr[largeIndex]) break

    // 4.变换位置
    swap(arr, index, largeIndex)
    index = largeIndex
  }
}

// 测试
// testSort(heapSort)
// measureSort(heapSort)
