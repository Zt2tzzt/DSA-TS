export function maxArray(nums: number[]): number {
  const n = nums.length

  // 1.定义状态
  const dp: number[] = []

  // 2.初始化状态
  dp[0] = nums[0]

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }

  return Math.max(...dp)
}

// 测试
console.log(maxArray([5,4,-1,7,8]))
