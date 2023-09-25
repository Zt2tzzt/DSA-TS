function uniquePaths(m: number, n: number): number {
  // 1.定义状态，dp 二维数组
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(1))

  // 2.设置初始化值
  /**
   * [
   *   [1, 1, 1, 1, 1, 1, 1],
   *   [1, 0, 0, 0, 0, 0, 0],
   *   [1, 0, 0, 0, 0, 0, 0]
   * ]
   */
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1
  }

  // 3.状态转移方齿，求解后面的值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
};
