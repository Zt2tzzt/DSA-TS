import BSTree, { TreeNode } from './BSTree'
import AVLTreeNode from './02-封装AVLTreeNode（左、右旋转操作）'

class AVLTree<T> extends BSTree<T> {
  // 找到不平衡的节点

  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode(value)
  }

  // 查找不平衡的节点，并对该节点进行再平衡
  protected checkBalance(node: AVLTreeNode<T>) {
    let current = node.parent

    while (current) {
      if (!current.isBalance) {
        this.rebalance(current)
      }
      current = current.parent
    }
  }

  // 让不平衡的节点，变得平衡
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.highterChild
    const current = pivot?.highterChild

    let resultNode: AVLTreeNode<T> | null = null
    if (pivot?.isLeft) {
      if (current?.isLeft) {
        // LL
        resultNode = root.rightRotation()
      } else {
        //LR
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else {
      if (current?.isLeft) {
        // RL
        pivot?.rightRotation()
        resultNode = root.leftRotation()
      } else {
        // RR
        resultNode = root.leftRotation()
      }
    }

    if (!resultNode.parent) {
      this.root = resultNode
    }
  }
}

// 测试
const avlTree = new AVLTree<number>()
/* avlTree.insert(10)
avlTree.insert(15)
avlTree.insert(20) */
for (let i = 0; i < 20; i++) {
  avlTree.insert(Math.floor(Math.random() * 200))
}
avlTree.print()
