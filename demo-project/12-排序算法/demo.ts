import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// -----------------------

function insertionSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    const current = arr[i]

    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = current
  }

  return arr
}

testSort(insertionSort)
// measureSort(selectionSort)
