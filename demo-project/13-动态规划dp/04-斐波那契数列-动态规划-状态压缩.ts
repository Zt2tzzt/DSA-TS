export function fibnacci(n: number): number {
if (n <= 1) return n

  // 1.定义状态；3.初始化状态
  let prev = 0, curr = 1

  for (let i = 2; i <= n; i++) {
    // 2.状态转移方程
    const newValue = prev + curr
    prev = curr
    curr = newValue
  }

  // 4.获取最终结果
  return curr
}

// 测试
console.log(fibnacci(50))
