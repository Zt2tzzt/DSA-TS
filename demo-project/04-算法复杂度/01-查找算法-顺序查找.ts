/**
 * @description: 此函数用于：顺序查找
 * @Author: ZeT1an
 * @param {number} array 有序的数组
 * @param {number} num 要查找的元素
 * @return {number} 元素的索引
 */
function sequentSearch(array: number[], num: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i
    }
  }
  return -1
}

export default sequentSearch

// 测试
/* const index = sequentSearch([1, 3, 5, 10, 100, 222, 333], 222)
console.log(index) */
