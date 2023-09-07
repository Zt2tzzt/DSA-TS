import { measureSort, swap } from 'hy-algokit';
import { testSort } from './utils';

const selectionSort = (arr: number[]): number[] => {
  const n = arr.length
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (i !== minIndex) swap(arr, i, minIndex)
  }

  return arr
}

export default selectionSort

// measureSort(selectionSort)
// testSort(selectionSort)