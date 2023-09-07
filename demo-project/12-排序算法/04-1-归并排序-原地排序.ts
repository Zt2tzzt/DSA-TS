import { measureSort, testSort } from 'hy-algokit';

/**
 * @description: 此函数用于：归并排序
 * @Author: ZeT1an
 * @param {number} arr 要排序的数组
 * @return {*number[]} 排序后的数组
 */
export default function mergeSort(arr: number[]): number[] {
  const n = arr.length
  mergeSortInternal(arr, 0, n - 1)
  return arr
}

/**
 * @description: 此函数用于：归并排序内部实现的函数，堆数组 arr 的 [left, right] 区间，进行排序
 * @Author: ZeT1an
 * @param {number} arr 元素组
 * @param {number} left 开始的索引
 * @param {number} right 末尾的索引
 * @return {*}
 */
function mergeSortInternal(arr: number[], left: number, right: number) {
  // 如果区间只有一个元素，或者为空，直接返回
  if (left >= right) return;


  // 区间分为左右两个子区间，分别递归调用 mergeSortInternal 函数
  const mid = Math.floor(left + (right - left) / 2)
  mergeSortInternal(arr, left, mid)
  mergeSortInternal(arr, mid + 1, right)

  // 左右子区间排序完成后，开始合并
  merge(arr, left, mid, right)
}

/**
 * @description: 此函数用于：将已经排好序的左右两个子区间，合并成一个有序的区间
 * @Author: ZeT1an
 * @param {number} arr 排序的数组
 * @param {number} left 开始的索引
 * @param {number} mid 中间的索引
 * @param {number} right 末尾的索引
 * @return {*}
 */
function merge(arr: number[], left: number, mid: number, right: number) {
  const temp = new Array(right - left + 1);
  let i = left;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  // 如果左子区间还有元素，将它们全部复制到 temp 中。
  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  // 如果右子区间还有元素，将它们全部复制到 temp 中。
  while (j <= right) {
    temp[k++] = arr[j++];
  }

  // 将 temp 中的内容复制到原数组中。
  for (let x = 0; x < temp.length; x++) {
    arr[left + x] = temp[x];
  }
}

// 测试
// testSort(mergeSort)
measureSort(mergeSort)
