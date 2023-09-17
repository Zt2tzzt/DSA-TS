export function jumpStep(n: number): number {
  return n <= 1 ? 1 : jumpStep(n - 1) + jumpStep(n - 2)
}

// 测试
console.log(jumpStep(10))
