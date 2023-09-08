// import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function isSorted(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false
  }

  return true
}

type SortFn = (arr: number[]) => number[]

function testSort(fn: SortFn) {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  console.log('排序前的数组：', arr)

  const newArr = fn(arr)
  console.log('排序后的数组：', newArr)
  console.log('排序后的数组是否有序：', isSorted(newArr))
}

// ------------

function heapSort(arr: number[]): number[] {
  const n = arr.length

  const lastNoneleafNodeIndex = Math.floor((n - 1) / 2 - 1)
  for (let i = lastNoneleafNodeIndex; i >= 0; i--) {
    heapfiyDown(arr, n, i)
  }

  for (let i = n - 1; i >= 0; i--) {
    swap(arr, 0, i)
    heapfiyDown(arr, i, 0)
  }

  return arr
}

function heapfiyDown(arr: number[], n: number, index: number) {
  while (2 * index + 1 < n) {
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = leftChildIndex + 1

    let largeIndex = leftChildIndex
    if (rightChildIndex < n && arr[rightChildIndex] > arr[leftChildIndex]) {
      largeIndex = rightChildIndex
    }

    if (arr[index] >= arr[largeIndex]) break
    
    swap(arr, index, largeIndex)
    index = largeIndex
  }
  
}

testSort(heapSort)
// measureSort(selectionSort)
