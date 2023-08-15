import LinkedList from './01-单向链表重构'
import { DoublyNode } from './LinkedNode'

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | null = null
  protected tail: DoublyNode<T> | null = null

  append(value: T): void {
    const newNode = new DoublyNode(value)

    if (!this.head) { // 如果链表中没有存放元素
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
  }

  prepend(value: T): void {
    const newNode = new DoublyNode(value)
    
    if (!this.head) { // 如果链表中没有存放元素
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
  }

  postTraverse() {
    const values: T[] = []
    let current = this.tail
    while (current) {
      values.push(current.value)
      current = current.prev
    }

    console.log(values.join('->'))
  }

  insert(position: number, value: T): boolean {
    if (position < 0 || position > this.length) return false

    if (position === 0) {
      this.prepend(value)
    } else if (position === this.length) {
      this.append(value)
    } else {
      const newNode = new DoublyNode(value)
      const current = this.getNode(position) as DoublyNode<T>

      current.prev!.next = newNode
      newNode.next = current
      newNode.prev = current.prev
      current.prev = newNode // 该操作，要放在最后。

      this.length++
    }

    return true
  }
}

const dlinkedList = new DoublyLinkedList<string>()
dlinkedList.append('aaa')
dlinkedList.append('bbb')
dlinkedList.append('ccc')
dlinkedList.append('ddd')

dlinkedList.prepend('abc')
dlinkedList.prepend('cba')

dlinkedList.traverse()
dlinkedList.postTraverse()

dlinkedList.insert(0, "why")
dlinkedList.insert(7, "kobe")
dlinkedList.insert(3, "james")

dlinkedList.traverse()
dlinkedList.postTraverse()
