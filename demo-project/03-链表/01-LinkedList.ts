class Node<T> {
  next: Node<T> | null = null
  constructor(public value: T) {}
}

class LinkedList<T> {
  head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }

    return current
  }

  append(value: T) {
    const newNode = new Node(value)

    if (!this.head) {
      // 情况一：链表本身为空
      this.head = newNode
    } else {
      // 情况二：链表不为空。
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  insert(position: number, value: T): boolean {
    // 越界处理
    if (position < 0 || position > this.size) {
      return false
    }

    const newNode = new Node(value)

    if (position === 0) {
      // 情况一：情况一：添加到链表头部（第一个）位置，
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      // 插入操作，下面两行代码的顺序，一定是不变的。
      newNode.next = previous!.next
      previous!.next = newNode
    }

    this.size++
    return true
  }

  removeAt(position: number): T | null {
    // 越界处理
    if (position < 0 || position >= this.size) return null

    let removeNode: Node<T> | null = null
    if (position === 0) {
      // 情况一：删除链表头部元素。
      removeNode = this.head ?? null
      this.head = this.head?.next ?? null
    } else {
      // 情况二：删除链表头部元素以外的元素。
      const previous = this.getNode(position - 1)
      removeNode = previous?.next ?? null
      previous!.next = previous?.next?.next ?? null
    }

    this.size--
    return removeNode?.value ?? null
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null

    return this.getNode(position)?.value ?? null
  }

  update(position: number, value: T): boolean {
    if (position < 0 || position >= this.size) return false

    const node = this.getNode(position)
    node!.value = value
    return true
  }

  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) return index
      current = current.next
      index++
    }
    return -1
  }

  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  isEmpty(): boolean {
    return this.size === 0
  }
}

const linkedList = new LinkedList<string>()
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
linkedList.traverse()

export {}
