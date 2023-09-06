import { swap, testSort, measureSort } from 'hy-algokit';

function quickSort(arr: number[]): number[] {

  partition(0, arr.length - 1)
  
  function partition(start: number, end: number) {
    if (start >= end) return arr

    // 三数取中
    const mid = Math.floor((start + end) / 2)
    if (mid > start && mid < end) {
      if (arr[start] > arr[end]) swap(arr, start, end)
      if (arr[mid] > arr[end]) swap(arr, mid, end)
      if (arr[start] > arr[mid]) swap(arr, start, end)
      swap(arr ,mid, end)
    }

    const pivot = arr[end] // 将原数组最后一个元素，作为基准元素 pivot

    let i = start, j = end - 1 // 双指针

    // 交换后的结果，左边都是比 pivot 小的数字，右边都是比 pivot 大的数字
    while (i <= j) {
      while (arr[i] < pivot) i++
      while (arr[j] > pivot) j--

      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    // 将 pibot 放在正确位置，以它为基准，再切割成两个数组，进行快速排序
    swap(arr, i, end)
    partition(start, j)
    partition(i + 1, end)
  }

  return arr
}

// 测试
testSort(quickSort)
measureSort(quickSort)
