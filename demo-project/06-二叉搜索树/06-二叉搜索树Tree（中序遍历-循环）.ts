import { btPrint } from 'hy-algokit'

class Node<T> {
  constructor(public value: T) {}
}

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

/**
 * @description: 此类用于：二叉搜索树的封装
 * @Author: ZeT1an
 */
class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  /**
   * @description: 此函数用于：二叉搜索树的插入操作。
   * @Author: ZeT1an
   * @param {T} value 插入的值
   * @return {*}
   */
  insert(value: T) {
    // 1.根据传入的 value，创建 Node 节点。
    const newNode = new TreeNode(value)

    // 2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  /**
   * @description: 此函数用于：二叉树的中序遍历
   * @Author: ZeT1an
   * @return {*}
   */
  inOrderTraverse() {
    let stack: TreeNode<T>[] = []
    let current: TreeNode<T> | null = this.root

    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current)
        current = current.left
      }

      current = stack.pop()!
      console.log(current.value)
      current = current.right
    }
  }
}

export default BSTree

// 测试
const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.print()
bst.inOrderTraverse()
