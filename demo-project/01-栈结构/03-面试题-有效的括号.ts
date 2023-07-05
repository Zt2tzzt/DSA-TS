import { ArrayStack  } from './01-ArrayStack';

function isValid(str:string) {
  const stack = new ArrayStack()

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    switch (c) {
      case '(':
        stack.push(')')
        break;
      case '{':
        stack.push('}')
        break;
      case '[':
        stack.push(']')
        break;
      default:
        // 一旦有一个括号未匹配，就返回 false
        if (c !== stack.pop()) return false
        break;
    }
  }

  // 如果栈中，还有元素，表示有括号没匹配，返回 false，否则返回 true
  return stack.isEmpty()
}

console.log(isValid("()"))
console.log(isValid("([]){}"))
console.log(isValid("(]"))