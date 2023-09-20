function maxSubArray(nums: number[]): number {
  const n = nums.length

  let prevMaxSum = nums[0]

  let maxSum = prevMaxSum
  for (let i = 1; i < n; i++) {
    prevMaxSum = Math.max(nums[i], nums[i] + prevMaxSum)
    maxSum = Math.max(prevMaxSum, maxSum)
  }

  return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))