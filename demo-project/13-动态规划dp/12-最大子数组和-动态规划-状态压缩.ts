export function maxArray(nums: number[]): number {
  const n = nums.length

  // 1.定义状态；2.初始化状态
  let prevMaxSum = nums[0]

  let maxSum = prevMaxSum
  for (let i = 1; i < n; i++) {
    prevMaxSum = Math.max(nums[i], nums[i] + prevMaxSum)
    maxSum = Math.max(prevMaxSum, maxSum)
  }

  return maxSum
}

// 测试
console.log(maxArray([5,4,-1,7,8]))
