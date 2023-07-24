export default interface IList<T> {
  peek(): T | undefined; // 返回栈顶元素但不移除
  isEmpty(): boolean; // 判断栈是否为空
  size(): number; // 获取栈的大小
  // get size(): number
}