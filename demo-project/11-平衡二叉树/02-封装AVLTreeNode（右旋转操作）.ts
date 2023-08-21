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
}

const avlNode1 = new AVLTreeNode(6)
avlNode1.right = new AVLTreeNode(7)
avlNode1.right.right = new AVLTreeNode(8)
console.log(avlNode1.highterChild)
