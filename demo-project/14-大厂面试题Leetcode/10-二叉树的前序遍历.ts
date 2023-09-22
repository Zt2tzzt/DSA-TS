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

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  recursionTraversal(root, res)
  return res
}

function recursionTraversal(node: TreeNode | null, res: number[]) {
  if (node) {
    res.push(node.val)
    recursionTraversal(node.left, res)
    recursionTraversal(node.right, res)
  }
}
