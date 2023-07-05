import { IStack } from './type';

/**
 * @description: 此类用于：封装栈（Stack)数据结构。
 * @Author: ZeT1an
 * @return {*}
 */
export class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  // 此函数用于：获取栈顶的元素
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): number {
    return this.data.length;
  }
}

// 示例使用
const stack = new ArrayStack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());    // 输出：3
console.log(stack.peek());   // 输出：2
console.log(stack.size());   // 输出：2
console.log(stack.isEmpty());  // 输出：false