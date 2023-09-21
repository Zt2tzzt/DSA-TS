function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length

  // 创建双端队列，琼中存放索引
  const dequeue: number[] = []
  const res: number[] = []

  // 遍历每一个元素
  for (let i = 0; i < n; i++) {
    // 移除窗口左侧超出范围的元素索引
    if (dequeue.length > 0 && dequeue[0] < i - k + 1) {
      dequeue.shift()
    }

    // 如果，双端队列不为空，并且队列尾部的索引对应的值，小于遍历的值
    // 则将元素，放入到双端队列的尾部
    while (dequeue.length && nums[i] > nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop()
    }
    dequeue.push(i)


    // 获取到头部的值，作为最大值
    if (i >= k - 1) {
      res.push(nums[dequeue[0]])
    }
  }

  return res
}

// 测试
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
