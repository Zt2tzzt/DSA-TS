export function fibnacci(n: number): number {
  /**
   * 1.定义状态：
   * n 位置的值：(n - 1) + (n - 2)
   */
  const memo: number[] = []

  /**
   * 3.设置初始化状态：
   * 初始化状态 0 和 1 位置，对应的数字分别是 0 和 1
   */
  memo[0] = 0
  memo[1] = 1
  for (let i = 2; i <= n; i++) {
    /**
     * 2.状态转移方程
     */
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  // 4.获取最终结果
  return memo[n]
}

// 测试
console.log(fibnacci(50))
