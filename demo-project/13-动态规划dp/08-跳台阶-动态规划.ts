export function jumpstep(n: number): number {
  // 1.定义状态
  const dp: number[] = []

  // 2.初始化状态
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    // 3.状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  // 4.最终解
  return dp[n]
}

// 测试
console.log(jumpstep(10))