export function maxArray(nums: number[]): number {
  const n = nums.length

  // 1.定义状态；2.初始化状态
  let prev = nums[0]

  let max = prev
  for (let i = 1; i < n; i++) {
    prev = Math.max(nums[i], nums[i] + prev)
    max = Math.max(prev, max)
  }

  return max
}

// 测试
console.log(maxArray([5,4,-1,7,8]))
