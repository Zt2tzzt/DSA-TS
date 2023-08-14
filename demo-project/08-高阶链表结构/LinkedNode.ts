/**
 * @description: 此类用于表示：单向链表的节点
 * @Author: ZeT1an
 */
export class Node<T> {
  next: Node<T> | null = null
  constructor(public value: T) {}
}

/**
 * @description: 此类用于表示：双向链表的节点
 * @Author: ZeT1an
 */
export class DoublyNode<T> extends Node<T> {
  prev: DoublyNode<T> | null = null
  // 重写 next 属性，其类型必须是 Node 类型，或 Node 类型的子类型。
  next: DoublyNode<T> | null = null
}
