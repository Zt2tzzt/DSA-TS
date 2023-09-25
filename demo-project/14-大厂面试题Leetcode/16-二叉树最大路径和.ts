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

function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity

  // 定义内部函数进行递归操作
  function dfs(node: TreeNode | null): number {
    if (!node) return 0

    // 左右子树计算可以提供的非 0 最大值
    const leftSum = Math.max(dfs(node.left), 0)
    const rightSum = Math.max(dfs(node.right), 0)

    // 当前节点中能获取到的最大值
    const pathSum = node.val + leftSum + rightSum
    maxSum = Math.max(pathSum, maxSum)

    // 返回当前节点能给父节点提供的最大值
    return node.val + Math.max(leftSum, rightSum)
  }

  dfs(root)

  return maxSum
}
