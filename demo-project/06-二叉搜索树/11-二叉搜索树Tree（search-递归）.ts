import { btPrint } from 'hy-algokit';

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
   * @description: 此函方法于：二叉搜索树的插入操作。
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
   * @description: 此函方法于：二叉搜索树的遍历操作
   * @Author: ZeT1an
   * @return {*}
   */
  preorderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  /**
   * @description: 此函方法于：二叉树的中序遍历操作
   * @Author: ZeT1an
   * @return {*}
   */  
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) { 
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  /**
   * @description: 此函方法于：二叉树的后序遍历操作
   * @Author: ZeT1an
   * @return {*}
   */
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  /**
   * @description: 此函方法于：二叉树的层序遍历操作
   * @Author: ZeT1an
   * @return {*}
   */
  levelOrderTraverse() {
    // 1.如果没有根节点，那么不需要遍历
    if (!this.root) return

    // 2.创建队列结构，第1个节点是根节点
    const queue: TreeNode<T>[] = [this.root]

    // 3.遍历队列中所有的节点（依次出队）
    while (queue.length) {
      const current = queue.shift()!
      console.log(current!.value)

      // 4.将左子节点放入到队列中
      if (current.left) {
        queue.push(current.left)
      }

      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  /**
   * @description: 此方法用于：获取二叉搜索树的最大值
   * @Author: ZeT1an
   * @return {*}
   */
  getMaxVAlue(): T | null {
    let current = this.root
    while (current && current?.right) {
      current = current?.right
    }

    return current?.value ?? null
  }

  /**
   * @description: 此方法用于：获取二叉搜索树的最小值
   * @Author: ZeT1an
   * @return {*}
   */
  getNinValue(): T | null {
    let current = this.root
    while (current && current?.left) {
      current = current?.left
    }

    return current?.value ?? null
  }


  /**
   * @description: 此方法用于：二叉搜索树的收缩
   * @Author: ZeT1an
   * @param {T} value 要搜索的值
   * @return {boolean} 是否有要搜索的值
   */
  search(value: T): boolean {
    return this.searchNode(this.root, value)
  }
  private searchNode(node: TreeNode<T> | null, value: T): boolean { 
    if (node === null) return false

    if (node.value > value) {
      return this.searchNode(node.left, value)
    } else if (node.value < value) {
      return this.searchNode(node.right, value)
    } else {
      return true
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

console.log('有 20 吗？', bst.search(20))
