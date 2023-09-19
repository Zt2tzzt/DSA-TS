class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
  }


function flatten(root: TreeNode | null): void {
  // 边界判断
  if (!root) return

  // 栈结构
  const stack = [root]
  let prev: TreeNode | null = null

  while (stack.length) {
    const curr = stack.pop()!

    if (prev) {
      prev.right = curr
      prev.left = null
    }

    // 将左右两个节点，压入到栈中
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
    prev = curr
  }
};