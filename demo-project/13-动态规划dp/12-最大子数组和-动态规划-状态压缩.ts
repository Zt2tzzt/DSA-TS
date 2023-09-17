export function maxArray(nums: number[]): number {
  const n = nums.length

  // 1.定义状态；2.初始化状态
  let prev = nums[0]

  let maxSum = prev
  for (let i = 1; i < n; i++) {
    prev = Math.max(nums[i], nums[i] + prev)
    maxSum = Math.max(prev, maxSum)
  }

  return maxSum
}

// 测试
console.log(maxArray([5,4,-1,7,8]))
