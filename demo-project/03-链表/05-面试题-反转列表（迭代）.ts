import ListNode from './ListNode';

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  let newHead: ListNode | null = null
  let current: ListNode | null = null
  while(head) {
    // 1.先让 current 指向下一个节点。目的：保留下一个节点的引用，使它可达，不会被销毁。
    current = head.next
    // 2.改变 head 指向的节点为 newHead，对于第一个节点来说，指向 newHead，就是指向 null
    head.next = newHead
    // 3.让 newHead 指向 head 节点。目的是下一次遍历时，第二步操作，可以让下一个节点，指向第一个节点。
    newHead = head
    // 4.让 head 移向下一个节点，指向 current
    head = current
  }

  return newHead
}


// 测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)

let current = newHead
while (current) {
  console.log(current.val)
  current = current.next
}


export {}