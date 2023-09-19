function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  // 遍历所有的 tokens
  for (const token of tokens) {
    switch (token) {
      case '+':
        const a = stack.pop()!
        const b = stack.pop()!
        stack.push(b + a)
        break;
      case '-':
        const c = stack.pop()!
        const d = stack.pop()!
        stack.push(d - c)
        break;
      case '*':
        const e = stack.pop()!
        const f = stack.pop()!
        stack.push(f * e)
        break;
      case '/':
        const g = stack.pop()!
        const h = stack.pop()!
        stack.push(Math.trunc(h / g))
        break;
      default:
        stack.push(Number(token))
        break;
    }
  }

  return stack.pop()!
};

// 测试
console.log(evalRPN(["2","1","+","3","*"]))
