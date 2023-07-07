import type { IList } from "../type/ilist";

export interface IStack<T> extends IList<T> {
  push(item: T): void; // 添加元素到栈顶
  pop(): T | undefined; // 移除栈顶元素并返回
}
