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
    } else { // 链表中至少有一个元素。
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
    } else { // 链表中至少有一个元素。
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

    if (position === 0) { // 在头部插入元素
      this.prepend(value)
    } else if (position === this.length) { // 在尾部插入元素
      this.append(value)
    } else { // 在中间插入元素
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

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) { // 删除的是头节点。
      if (this.length == 1) { // 链表仅有一个节点
        this.head = null
        this.tail = null
      } else { // 链表并非仅有一个节点
        this.head = this.head!.next
        this.head!.prev = null
      }
    } else if (position === this.length - 1) { // 删除的是尾节点
      current = this.tail
      this.tail = this.tail!.prev
      this.tail!.next = null
    } else { // 删除的是非尾部、头部的节点
      current = this.getNode(position) as DoublyNode<T>
      current.prev!.next = current.next
      current.next!.prev = current.prev
    }

    this.length--
    return current?.value ?? null
  }
}

const dlinkedList = new DoublyLinkedList<string>()
console.log('----------- append / prepend ----------')
dlinkedList.append('aaa')
dlinkedList.append('bbb')
dlinkedList.append('ccc')
dlinkedList.append('ddd')

dlinkedList.prepend('abc')
dlinkedList.prepend('cba')

dlinkedList.traverse()
dlinkedList.postTraverse()

console.log('----------- insert ----------')
dlinkedList.insert(0, 'zzt')
dlinkedList.insert(7, 'kobe')
dlinkedList.insert(3, 'james')

dlinkedList.traverse()
dlinkedList.postTraverse()

console.log('----------- removeAt ----------')
dlinkedList.removeAt(0)
dlinkedList.removeAt(7)
dlinkedList.removeAt(2)
dlinkedList.traverse()
dlinkedList.postTraverse()

console.log('----------- 其它方法测试 ----------')
console.log('----------- get ---------')
console.log(dlinkedList.get(0))
console.log(dlinkedList.get(1))
console.log(dlinkedList.get(2))

console.log('----------- update ---------')
dlinkedList.update(1, 'zzt')
dlinkedList.update(2, 'kobe')
dlinkedList.traverse()

console.log('----------- indexof ---------')
console.log(dlinkedList.indexOf('cba'))
console.log(dlinkedList.indexOf('zzt'))
console.log(dlinkedList.indexOf('kobe'))
console.log(dlinkedList.indexOf('james'))

console.log('----------- rmove ---------')

dlinkedList.remove('zzt')
dlinkedList.remove('kobe')
dlinkedList.remove('cba')
dlinkedList.traverse()
console.log(dlinkedList.isEmpty())
console.log(dlinkedList.size())
