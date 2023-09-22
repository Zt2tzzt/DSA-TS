//  Definition for a binary tree node.
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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  recursTraversal(root, res)
  return res
}

function recursTraversal(node: TreeNode | null, arr: number[]) {
  if (node) {
    recursTraversal(node.left, arr)
    arr.push(node.val)
    recursTraversal(node.right, arr)
  }
}
