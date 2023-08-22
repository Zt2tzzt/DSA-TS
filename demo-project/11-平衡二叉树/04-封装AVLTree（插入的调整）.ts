import BSTree, { TreeNode } from '../06-二叉搜索树/14-二叉搜索树Tree（delete-重构）'
import AVLTreeNode from './02-封装AVLTreeNode（左、右旋转操作）'

class AVLTree<T> extends BSTree<T> {
  // 找到不平衡的节点

  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode(value)
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
avlTree.insert(10)
avlTree.insert(15)
avlTree.insert(20)
avlTree.print()
