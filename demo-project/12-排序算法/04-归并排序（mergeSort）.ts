import { testSort, measureSort } from 'hy-algokit';

export default function mergeSort(arr: number[]): number[] {
  const n = arr.length
  if (n <= 1) return arr

  const mid = Math.floor(n / 2) // 获取到愿数组中间位置的索引
  const leftArr = arr.slice(0, mid) // 切割得到左边数组
  const rightArr = arr.slice(mid) // 切割得到右边数组

  // 递归切割
  const leftSorted = mergeSort(leftArr)
  const rightSorted = mergeSort(rightArr)

  // 合并切割的数组（使用双指针）
  const newArr: number[] = []
  let i = 0
  let j = 0
  while (i < leftSorted.length && j < rightSorted.length) {
    if (leftSorted[i] <= rightSorted[j]) {
      newArr.push(leftSorted[i])
      i++
    } else {
      newArr.push(rightSorted[j])
      j++
    }
  }

  // 判断是否第一个数字中还有剩余的元素，有则将它们加入到新数组中。
  /* if (i < leftSorted.length) {
    newArr.push(...leftSorted.slice(i))
  }
  if (j < rightSorted.length) {
    newArr.push(...rightSorted.slice(j))
  } */

  return newArr.concat(leftSorted.slice(i), rightSorted.slice(j))
  // return newArr
}

// 测试
testSort(mergeSort)
// measureSort(mergeSort)
