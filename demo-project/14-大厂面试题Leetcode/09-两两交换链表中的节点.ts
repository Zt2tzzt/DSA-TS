// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  // 1.创建虚拟节点
  const dummy = new ListNode(0, head)

  // 2.创建 current 节点，指向虚拟节点
  let curr = dummy
  while (curr.next && curr.next.next) {
    // 将接下来的两个节点取出
    const node1 = curr.next
    const node2 = curr.next.next

    // 交换 node1 和 node2 的位置
    curr.next = node2
    node1.next = node2.next
    node2.next = node1

    // 开始下一次的交换
    curr = node1
  }

  return dummy.next
}
