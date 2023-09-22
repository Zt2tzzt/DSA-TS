//  Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null

  // 1.创建虚拟节点
  const dummy = new ListNode(0)
  dummy.next = head

  // 2.创建双指针（快慢指针）
  let slow = dummy
  let fast = dummy

  // 3.先让快指针，移动到 n + 1 个节点
  for (let i = 0; i<= n; i++) {
    fast = fast.next!
  }

  // 2.同时移动 fast 和 slow，直到 fast 到达链表末尾
  while (fast) {
    fast = fast.next!
    slow = slow.next!
  }

  slow.next = slow.next ? slow.next.next : null

  return dummy.next
}
