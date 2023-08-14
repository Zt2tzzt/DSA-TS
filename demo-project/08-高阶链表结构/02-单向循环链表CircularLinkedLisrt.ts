import LinkedList from './01-单向链表重构'

class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)

    // 将 tail.next 指向 head
    this.tail!.next = this.head
  }

  insert(position: number, value: T): boolean {
    const isSuccess = super.insert(position, value)

    // 在头部，尾部插入节点时，要改变 tail.next 的指向
    if (isSuccess && (position === this.length - 1 || position === 0)) {
      // 更新 tail
      this.tail!.next = this.head
    }

    return isSuccess
  }

  removeAt(position: number): T | null {
    const removed = super.removeAt(position)

    // 在头部，尾部删除节点时，要改变 tail.next 的指向
    if (removed && this.tail && (position === 0 || position === this.length)) {
      // 更新 tail
      this.tail.next = this.head
    }

    return removed
  }
  
}

export default CircularLinkedList

// 测试
const clinkedList = new CircularLinkedList<string>()
console.log('---测试 append---')
clinkedList.append('aaa')
clinkedList.append('bbb')
clinkedList.append('ccc')
clinkedList.append('ddd')
clinkedList.traverse()

console.log('---测试 insert---')
clinkedList.insert(0, "abc")
clinkedList.traverse()
clinkedList.insert(2, "cba")
clinkedList.insert(6, "nba")
clinkedList.traverse()

console.log('---测试 removeAt---')
clinkedList.removeAt(0)
clinkedList.traverse()
clinkedList.removeAt(2)
clinkedList.traverse()
clinkedList.removeAt(4)
clinkedList.traverse()

console.log('---测试 get---')
console.log(clinkedList.get(0))
console.log(clinkedList.get(1))
console.log(clinkedList.get(2))

console.log('---测试 update---')
clinkedList.update(0, "zzt")
clinkedList.update(1, "kobe")
clinkedList.update(2, "james")
clinkedList.traverse()

console.log('---测试 indexOf---')
console.log(clinkedList.indexOf("ddd"))
console.log(clinkedList.indexOf("zzt"))
console.log(clinkedList.indexOf("kobe"))
console.log(clinkedList.indexOf("james"))

console.log('---测试 remove---')
clinkedList.remove("zzt")
console.log(clinkedList.remove("ddd"))
clinkedList.remove("kobe")
clinkedList.traverse()
console.log(clinkedList.isEmpty())
console.log(clinkedList.size())