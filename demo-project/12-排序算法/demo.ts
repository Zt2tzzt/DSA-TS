import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// -----------------------

function heapSort(arr: number[]): number[] {
  const n = arr.length

  // 原地建堆
  const lastNoneLeafNode = Math.floor((n - 1) / 2 - 1)
  for (let i = lastNoneLeafNode; i >= 0; i--) {
    heapfy_down(arr, n, i)
  }

  // 排序操作
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapfy_down(arr, i, 0)
  }

  return arr
}

function heapfy_down(arr: number[], n: number, index: number) {
  while (2 * index + 1 < n) {
    const leftChildIndex = 2 * index + 1
    const rightchildIndex = leftChildIndex + 1

    let largeIndex = leftChildIndex
    if (rightchildIndex < n && arr[rightchildIndex] > arr[leftChildIndex]) {
      largeIndex = rightchildIndex
    }

    if (arr[index] > arr[largeIndex]) break
    swap(arr, index, largeIndex)
    index = largeIndex
  }
}

testSort(heapSort)
// measureSort(selectionSort)
