import { measureSort, testSort } from 'hy-algokit';

export default function shellSort(arr: number[]): number[] {
  const n = arr.length

  let gap = Math.floor(n / 2) // 选择不同的增量

  // 第一层循环，不断改变步长的过程
  while (gap > 0) {
    
    // 第二层循环，找到不同的数列集合，进行插入排序
    for (let i = gap; i < n; i++) {
      let j = i
      const temp = arr[j]

      // 第三层循环：对数列进行插入排序的过程，使用 temp 向前去找到一个比 temp 小的值
      while (j > gap - 1 && temp < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j -= gap
      }

      arr[j] = temp
    }

    gap = Math.floor(gap / 2)
  }

  return arr
}

// testSort(shellSort)
// measureSort(shellSort)
