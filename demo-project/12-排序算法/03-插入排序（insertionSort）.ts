import { testSort, measureSort } from 'hy-algokit';

export default function insertionSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const current = arr[i];

    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = current
  }

  return arr
}

// 测试
// testSort(insertionSort)
// measureSort(insertionSort)
