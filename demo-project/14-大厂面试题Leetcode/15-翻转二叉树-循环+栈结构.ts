// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // 2.创建 stack 栈结构
  const stack = [root]
  
  // 2.从栈中不断地取出节点，对节点的左右子节点进行交换
  while (stack.length) {
    const current = stack.pop()!

    // 对 current 节点左右交换位置
    const temp = current.left
    current.left = current.right
    current.right = temp

    if (current.left) {
      stack.push(current.left)
    }
    if (current.right) {
      stack.push(current.right)
    }
  }

  return root
}