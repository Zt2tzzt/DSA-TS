import { TreeNode } from '../06-二叉搜索树/14-二叉搜索树Tree（delete-重构）';

class AVLTreeNode<T> extends TreeNode<T> {
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  get isBalance() {
    const balanceFactor = this.getBalanceFactor()
    return balanceFactor >= -1 && balanceFactor <= 1
  }

  get highterChild(): AVLTreeNode<T> | null {
    const leftNode = this.left
    const rightNode = this.right

    const leftHeight = leftNode?.getHeight() ?? -1
    const rightHeight = rightNode?.getHeight() ?? -1
    return leftHeight > rightHeight ? leftNode
      : leftHeight < rightHeight ? rightNode
      : this.isLeft ? leftNode : rightNode
  }

  private getHeight(): number {
    const leftHeight = this.left?.getHeight() ?? -1
    const rightHeight = this.right?.getHeight() ?? -1
    return Math.max(leftHeight, rightHeight) + 1
  }

  private getBalanceFactor(): number {
    const leftHeight = this.left?.getHeight() ?? -1
    const rightHeight = this.right?.getHeight() ?? -1
    return leftHeight - rightHeight
  }

  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理 pivot 节点
    const pivot = this.left!
    pivot.parent = this.parent

    // 2.处理 pivot 节点的 right
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }

    // 3.处理 this
    pivot.right = this
    this.parent = pivot

    // 4.挂载 pivot
    if (!pivot.parent) {
      return pivot
    } else if (isLeft) { // pivot 作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) { // pivot 作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot
  }

  leftRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理 pivot 节点
    const pivot = this.right!
    pivot.parent = this.parent

    // 2.处理 pivot 节点的 right
    this.right = pivot.left
    if (pivot.left) {
      pivot.left.parent = this
    }

    // 3.处理 this
    pivot.left = this
    this.parent = pivot

    // 4.挂载 pivot
    if (!pivot.parent) {
      return pivot
    } else if (isLeft) { // pivot 作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) { // pivot 作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot
  }

}

export default AVLTreeNode

const avlNode1 = new AVLTreeNode(6)
avlNode1.right = new AVLTreeNode(7)
avlNode1.right.right = new AVLTreeNode(8)
console.log(avlNode1.highterChild)
