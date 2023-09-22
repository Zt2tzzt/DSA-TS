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

function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  recursTravaersel(root, res)
  return res
}

function recursTravaersel(node: TreeNode | null, arr: number[]) {
  if (node) {
    recursTravaersel(node.left, arr)
    recursTravaersel(node.right, arr)
    arr.push(node.val)
  }
}
