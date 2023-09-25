function jewelleryValue(frame: number[][]): number {
  // 1.获取 m 排 n 列
  const m = frame.length
  const n = frame[0].length

  // 2.初始化 dp 保存每个位置的最大值
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0))
  dp[0][0] = frame[0][0]

  // 3.初始化值
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + frame[i][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + frame[0][j]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = frame[i][j] + Math.max(dp[i-1][j], dp[i][j-1])
    }
  }

  return dp[m-1][n-1]
};