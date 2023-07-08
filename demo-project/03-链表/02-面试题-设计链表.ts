class MyNode<T = number> {
  next: MyNode<T> | null
  constructor(public val: T) {}
}

class MyLinkedList {
  head: MyNode<number> | null
  private size = 0

  getNode(index) {
      let i = 0
      let current = this.head
      while(i++ < index && current) {
          current = current.next
      }

      return current
  }

  get(index: number): number {
      if (index < 0 || index >= this.size) return -1

      const node = this.getNode(index)
      return node!.val
  }

  addAtHead(val: number): void {
      const newNode = new MyNode(val)

      newNode.next = this.head
      this.head = newNode

      this.size++
  }

  addAtTail(val: number): void {
      const newNode = new MyNode(val)

      if (!this.head) {
          this.head = newNode
      } else {
          let current = this.head
          while(current.next) {
              current = current.next
          }
          current.next = newNode
      }
      this.size++
  }

  addAtIndex(index: number, val: number): void {
      if (index < 0 || index > this.size) return

      if (index === 0) {
          this.addAtHead(val)
      } else if (index === this.size) {
          this.addAtTail(val)
      } else {
          const newNode = new MyNode(val)
          const previousNode = this.getNode(index - 1)
          newNode.next = previousNode!.next
          previousNode!.next = newNode

          this.size++
      }
  }

  deleteAtIndex(index: number): void {
      if (index < 0 || index >= this.size) return

      if (index === 0) {
          if (this.head) this.head = this.head.next
      } else {
          const previousNode = this.getNode(index - 1)
          previousNode!.next = previousNode!.next!.next
      }
      this.size--
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/
