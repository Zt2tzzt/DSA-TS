// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const result: number[][] = []
  const queue: TreeNode[] = [root]

  while (queue.length > 0) {
    const levelSize = queue.length
    const currentLevel: number[] = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()! // 移除队首节点，并获取其值
      currentLevel.push(node.val)

      if (node?.left) {
        queue.push(node.left)
      }
      if (node?.right) {
        queue.push(node.right)
      }
    }

    result.push(currentLevel)
  }

  return result
}
