function lengthOfLIS(nums: number[]): number {
  const n = nums.length

  // 1.定义状态；2.初始化值。
  const dp: number[] = new Array(n).fill(1)

  // 3.状态转移方程
  let max = dp[0]
  for (let i = 0; i < n; i++) { // 和前面所有的元素进行一次比较(找到比我小的元素)
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1) // 状态转移方程
      }
    }

    max = Math.max(max, dp[i])
  }

  return max
};