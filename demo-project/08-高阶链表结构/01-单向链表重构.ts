import type ILinkedList from '../type/ilinkedlist';
import { Node } from './LinkedNode';


class LinkedList<T> implements ILinkedList<T> {
  protected head: Node<T> | null = null
  // 新增属性，总是指向链表的尾部。
  protected tail: Node<T> | null = null
  protected length: number = 0

  protected getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }

    return current
  }

  private isTail(node: Node<T>) {
    return this.tail === node
  }

  size() {
    return this.length
  }

  peek(): T | undefined {
    return this.head?.value
  }

  append(value: T) {
    const newNode = new Node(value)

    if (!this.head) {
      // 情况一：链表本身为空
      this.head = newNode
    } else {
      // 情况二：链表不为空。
      this.tail!.next = newNode
    }

    this.tail = newNode

    this.length++
  }

  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)

      // 判断是否遍历到最后一个节点。
      if (this.isTail(current)) {
        current = null // 防止死循环
      } else {
        current = current.next
      }
    }

    // 打印循环链表时，新城闭环
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value)
    }

    console.log(values.join('->'))
  }

  insert(position: number, value: T): boolean {
    // 越界处理
    if (position < 0 || position > this.length) return false

    const newNode = new Node(value)

    if (position === 0) { // 情况一：添加到链表头部（第一个）位置，
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      // 插入操作，下面两行代码的顺序，一定是不变的。
      newNode.next = previous!.next
      previous!.next = newNode

      // 在尾部插入时，tail 指向新节点
      if (position === this.length) this.tail = newNode
    }

    this.length++

    return true
  }

  removeAt(position: number): T | null {
    // 越界处理
    if (position < 0 || position >= this.length) return null

    let removeNode: Node<T> | null = null

    if (position === 0) {
      // 情况一：删除链表头部元素。
      removeNode = this.head ?? null
      this.head = this.head?.next ?? null

      // 情况 1.1：链表中仅有头节点
      if (this.length === 1) this.tail = null
    } else {
      // 情况二：删除链表头部元素以外的元素。
      const previous = this.getNode(position - 1)
      removeNode = previous?.next ?? null
      previous!.next = previous?.next?.next ?? null

      // 情况 2.1：删除的是尾节点
      if (position === this.length - 1) this.tail = previous
    }

    this.length--
    return removeNode?.value ?? null
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.length) return null

    return this.getNode(position)?.value ?? null
  }

  update(position: number, value: T): boolean {
    if (position < 0 || position >= this.length) return false

    const node = this.getNode(position)
    node!.value = value
    return true
  }

  indexOf(value: T): number {
    let index = 0
    let current = this.head

    while (current) {
      if (current.value === value) return index

      // 判断是否遍历到最后一个节点，防止死循环
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }

      index++
    }
    return -1
  }

  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  isEmpty(): boolean {
    return this.length === 0
  }
}

export default LinkedList

/* const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
linkedList.traverse()

console.log('insert-------------')
linkedList.insert(0, 'abc')
linkedList.traverse()
linkedList.insert(2, 'cba')
linkedList.insert(6, 'nba')
linkedList.traverse()

console.log('removeat----------')
console.log(linkedList.removeAt(0))
linkedList.traverse()
console.log(linkedList.removeAt(2))
linkedList.traverse()

console.log('get---------------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

console.log('update------------')
linkedList.update(0, 'haha')
linkedList.update(3, 'hehe')
linkedList.traverse()

console.log('indexOf-----------')
console.log(linkedList.indexOf('haha'))
console.log(linkedList.indexOf('ccc'))

console.log('remove-----------')
linkedList.remove('hehe')
linkedList.traverse() */

