export const jumpStep = (n: number, memo = new Array(n + 1).fill(0)): number => {
  if (n <= 1) return 1

  if (memo[n] !== 0) return memo[n]

  memo[n] = jumpStep(n - 1, memo) + jumpStep(n - 2, memo)

  return memo[n]
}

// 测试
console.log(jumpStep(10))
