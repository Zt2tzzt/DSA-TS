export interface IStack<T> {
  push(item: T): void; // 添加元素到栈顶
  pop(): T | undefined; // 移除栈顶元素并返回
  peek(): T | undefined; // 返回栈顶元素但不移除
  isEmpty(): boolean; // 判断栈是否为空
  size(): number; // 获取栈的大小
}