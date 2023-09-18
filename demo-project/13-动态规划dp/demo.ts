function fibnacci(n: number): number {
  const dp: number[] = []

  let prev = 0
  let curr = 1
  for (let i = 2; i <= n; i++) {
    const newVal = prev + curr
    prev = curr
    curr = newVal
  }

  return curr
}