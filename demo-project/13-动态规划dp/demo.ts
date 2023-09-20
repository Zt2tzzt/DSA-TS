function climbStairs(n: number): number {
  const dp: number[] = []

  let prev = 1
  let curr = 1
  for (let i = 2; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2]
    const newVal = curr + prev
    prev = curr
    curr = newVal
  }

  return curr
};

console.log(climbStairs(3))