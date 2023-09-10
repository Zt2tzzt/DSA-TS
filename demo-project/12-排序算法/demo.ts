// import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
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

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (minIndex !== i) swap(arr, minIndex, i)
  }

  return arr
}

// testSort()
// measureSort(selectionSort)
