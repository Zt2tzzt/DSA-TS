export function maxProfit(prices: number[]): number {
  const n = prices.length
  if (n <= 0) return 0

  // 1.定义状态
  const dp: number[] = []

  // 2.设置初始化值：第 0 天，能获得的最大收益是 0
  dp[0] = 0

  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    // 3.状态转移方程：第 i 天的收益 = 第 i 天的股价 - 第 i 天以前某一天的股价最小值
    dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
    minPrice = Math.min(prices[i], minPrice)
  }
  
  // 4，最终解
  return dp[n - 1]
}

// 测试
console.log(maxProfit([7,1,5,3,6,4]))
