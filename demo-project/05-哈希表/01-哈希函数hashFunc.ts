/**
 * @description: 此函数用于：将 key 6映射成 index。
 * @Author: ZeT1an
 * @param {string} key 转换的 key
 * @param {number} max 数组的长度（最大的数值）
 * @return {number} 索引值
 */
function hashFunc(key: string, max: number): number {
  let hashCode = 0;
  for (let i = 0; i < key.length; i++) {
    hashCode += 31 * hashCode + key.charCodeAt(i);
  }
  return hashCode % max;
} 

// 测试
// loaderFactor（装填因子）4 / 7 = 0.57...
console.log('hashfunc:', hashFunc('abc', 7))
console.log('hashfunc:', hashFunc('cba', 7))
console.log('hashfunc:', hashFunc('nba', 7))
console.log('hashfunc:', hashFunc('mba', 7))


console.log('hashfunc:', hashFunc('aaa', 7))
console.log('hashfunc:', hashFunc('bbb', 7))

export default hashFunc
