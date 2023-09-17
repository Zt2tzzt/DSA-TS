function fibnacci(n: number, memo: number[] = []): number {
  if (n <= 1) return n

  // 求 n 的值，直接拿到值，返回即可
  if (memo[n]) return memo[n]

  // 设置从 memo 中，获取到值
  const res = fibnacci(n - 1, memo) + fibnacci(n - 2, memo)
  memo[n] = res

  return res
}

// 测试
console.log(fibnacci(50))
