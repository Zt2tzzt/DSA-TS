function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  if (n === 0) return 0

  // 记录每个组中的最小值
  const tails: number[] = [nums[0]]

  // 遍历每一个元素
  for (let i = 1; i < n; i++) {
    const num = nums[i]

    // 如果 num 比当前递增子序列的最后一个元素还大，直接添加到末尾
    if (num > tails[tails.length - 1]) {
      tails.push(num)
    } else {
      // 使用二分查找，找到第一个比 num 大的元素，并替换掉
      let left = 0
      let right = tails.length - 1

      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (tails[mid] < num) {
          left = mid + 1
        } else {
          right = mid
        }
      }

      tails[left] = num
    }
  }

  return tails.length
}

export {}