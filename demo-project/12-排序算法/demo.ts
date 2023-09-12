import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// -----------------------

function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)

  function partition(start: number, end: number) {
    if (start >= end) return arr

    const mid = Math.floor((start + end) / 2)
    if (start < mid && mid < end) {
      if (arr[start] > arr[mid]) swap(arr, start, end)
      if (arr[mid] > arr[end]) swap(arr, mid, end)
      if (arr[start] > arr[mid]) swap(arr, start, end)
      swap(arr, mid, end)
    }

    const pivot = arr[end]

    let i = start, j = end - 1
    while (i <= j) {
      while (arr[i] < pivot) i++
      while (arr[j] > pivot) j--

      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    swap(arr, i, end)
    partition(start, j)
    partition(i + 1, end)
  }

  return arr
}

testSort(quickSort)
// measureSort(selectionSort)
