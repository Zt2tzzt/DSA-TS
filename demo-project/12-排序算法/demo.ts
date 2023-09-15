import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// -----------------------

function heapsort(arr: number[]): number[] {
  const n = arr.length

  let lastNoneLeafNodeIndex = Math.floor((n - 1) / 2 - 1)
  for (let i = lastNoneLeafNodeIndex; i >= 0; i--) {
    heapfy_down(arr, n, i)
  }

  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapfy_down(arr, i, 0)
  }

  return arr
}

function heapfy_down(arr: number[], n: number, index: number) {
  while (2 * index + 1 < n) {
    const leftChileIndex = 2 * index + 1
    const rightChildIndex = leftChileIndex + 1

    let largerIndex = leftChileIndex
    if (rightChildIndex < n && arr[rightChildIndex] > arr[leftChileIndex]) {
      largerIndex = rightChildIndex
    }

    if (arr[index] > arr[largerIndex]) break

    swap(arr, largerIndex, index)
    index = largerIndex
  }
}

testSort(heapsort)
// measureSort(selectionSort)
