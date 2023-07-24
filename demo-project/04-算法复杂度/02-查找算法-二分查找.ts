/**
 * @description: 此函数用于：二分查找
 * @Author: ZeT1an
 * @param {number} array 有序的数组
 * @param {number} num 要查找的元素
 * @return {number} 元素的索引
 */
function binarySearch(array: number[], num: number) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (array[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

export default binarySearch

// 测试
/* const index = binarySearch([1, 3, 5, 10, 100, 222, 333], 222)
console.log(index) */

