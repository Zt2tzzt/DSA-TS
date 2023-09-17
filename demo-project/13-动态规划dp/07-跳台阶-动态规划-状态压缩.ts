export function jumpstep(n: number): number {
  // 1.定义状态；2.初始化状态
  let prev = 1
  let curr = 1

  for (let i = 2; i <= n; i++) {
    // 3.状态转移方程
    const newVal = prev + curr
    curr = prev
    prev = newVal
  }

  // 4.最终解
  return curr
}

// 测试
console.log(jumpstep(10))