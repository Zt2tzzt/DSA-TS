function fibnacci(n: number): number {
  return n <= 1 ? n : fibnacci(n - 1) + fibnacci(n - 2)
}

// 测试
console.log(fibnacci(10))
console.log(fibnacci(50)) // 耗时很多
