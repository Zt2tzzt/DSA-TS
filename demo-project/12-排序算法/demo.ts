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

function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)

  function partition(start: number, end: number) {
    if (start >= end) return

    // 三叔取中
    const mid = Math.floor((start + end) / 2)
    if (start < mid && mid < end) {
      if (arr[start] > arr[mid]) swap(arr, start, mid)
      if (arr[mid] > arr[end]) swap(arr, mid, end)
      if (arr[start] > arr[mid]) swap(arr, start, mid)
      swap(arr, mid, end)
    }

    const pivot = arr[end]

    let i = 0, j = end - 1
    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--        
      }

      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    swap(arr, i, end)
    partition(0, j)
    partition(i + 1, end)
  }

  return arr
}

testSort(quickSort)
// measureSort(selectionSort)
