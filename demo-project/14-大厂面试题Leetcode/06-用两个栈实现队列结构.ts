class CQueue {
  private stack1: number[] = []
  private stack2: number[] = []
  constructor() {}

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(value: number): number {
    // 1.判断 stack2 中是否有数据
    if (this.stack2.length > 0) {
      return this.stack2.pop()!
    }
    
    // 2.判断 stack1 中是否有数据
    else if (this.stack1.length > 0) {
      // 从 stack1 中，取出所有的数据，放到 stack2 中。
      while (this.stack1.length > 0) {
        const item = this.stack1.pop()!
        this.stack2.push(item)
      }

      return this.stack2.pop()!
    }
    
    else {
      return -1
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
