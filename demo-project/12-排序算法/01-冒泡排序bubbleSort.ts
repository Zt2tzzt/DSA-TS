// import { measureSort } from 'hy-algokit';
import { testSort } from './utils';

export default function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr
}

// testSort(bubbleSort)
