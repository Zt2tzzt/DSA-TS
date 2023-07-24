import ListNode from './ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  //1.head 本身为 null 的情况。
  //2.head 只有一个节点。
  if (head === null || head.next === null) return head

  // 3.至少有两个节点。
  const stack: ListNode[] = []
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }

  const newHead: ListNode = stack.pop()!
  let newCurrent = newHead
  while (stack.length) {
    const node = stack.pop()!
    newCurrent.next = node
    newCurrent = newCurrent.next
  }

  // 避免栈中末尾节点的循环引用的问题。
  newCurrent.next = null
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
