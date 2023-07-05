// 实现链表结构。
class Node {
  constructor(public value: any, public next: Node | null = null) {}
}
class LinkedList {
  constructor(public head: Node | null = null) {}

  append(value: any) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  toArray() {
    const nodes: any[] = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    return this.toArray().toString();
  }
}

// 实现栈结构
class LinkedListStack {
  constructor(public linkedList: LinkedList = new LinkedList()) {}

  push(value: any) {
    this.linkedList.append(value);
  }

  pop() {
    const head = this.linkedList.head;
    if (!head) {
      return null;
    }
    this.linkedList.head = head.next;
    return head.value;
  }

  peek() {
    const head = this.linkedList.head;
    if (!head) {
      return null;
    }
    return head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toString() {
    return this.linkedList.toString();
  }
}
export default LinkedListStack;

