/**
 * @description: 此函数用于：判断传入的数字，是否是质数。
 * @Author: ZeT1an
 * @param {number} num 要判断的的数字
 * @return {boolean} 是否是一个质数
 */
function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * @description: 此函数用于：判断传入的数字，是否是质数。
 * @Author: ZeT1an
 * @param {number} num 要判断的的数字
 * @return {boolean} 是否是一个质数
 */
function isPrime2(num: number): boolean {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
} 
  

  
// 测试
console.log(isPrime2(8))
console.log(isPrime2(14))
console.log(isPrime2(15))

console.log(isPrime2(17))
console.log(isPrime2(23))