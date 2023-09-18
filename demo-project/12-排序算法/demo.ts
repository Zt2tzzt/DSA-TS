import { testSort } from 'hy-algokit';

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// -----------------------

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (i !== minIndex) swap(arr, i, minIndex)
  }

  return arr
}

testSort(selectionSort)
// measureSort(selectionSort)
