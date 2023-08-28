import { btPrint } from 'hy-algokit'

class Node<T> {
  constructor(public value: T) {}
}

export class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  // 当前节点的父节点
  parent: TreeNode<T> | null = null

  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

/**
 * @description: 此类用于：二叉搜索树的封装
 * @Author: ZeT1an
 */
class BSTree<T> {
  protected root: TreeNode<T> | null = null

  protected createNode(value: T): TreeNode<T> {
    return new TreeNode(value)
  }

  protected checkBalance(node: TreeNode<T>, isAdd = true) {}

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
    const newNode = this.createNode(value)

    // 2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }

    this.checkBalance(newNode)
  }
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
        newNode.parent = node // 新增插入的节点的 parent 引用
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
        newNode.parent = node // 新增插入的节点的 parent 引用
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

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      // 1.找到 current，直接返回
      if (current.value === value) {
        return current
      }

      // 2.继续向下找
      parent = current
      if (current.value > value) {
        current = current.left
      } else {
        current = current.right
      }

      // 如果 current 有值，那么 current 保存自己的父节点
      if (current) current.parent = parent
    }

    return null
  }

  /**
   * @description: 此方法用于：二叉搜索树的收缩
   * @Author: ZeT1an
   * @param {T} value 要搜索的值
   * @return {boolean} 是否有要搜索的值
   */
  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  /**
   * @description: 此方法用于：二叉搜索树中，节点的删除。
   * @Author: ZeT1an
   * @param {T} value
   * @return {*}
   */
  remove(value: T): boolean {
    // 1.查找 value 所在的节点
    const current = this.searchNode(value)
    if (!current) return false

    let delNode: TreeNode<T> | null = current

    let replaceNode: TreeNode<T> | null = null
    // 2.获取到三个东西，当前节点 / 父节点 / 当前节点是左子节点，还是右子节点
    // console.log('当前节点：', current.value, '父节点：', current.parent?.value)
    // 删除的是叶子节点
    if (current.left === null && current.right === null) {
      replaceNode = null
    }

    // 3.只有一个子节点
    else if (current.right === null) {
      // 只有左子节点
      replaceNode = current.left
    } else if (current.left === null) {
      // 只有右子节点
      replaceNode = current.right
    }
    
    // 4.有两个子节点
    else {
      const successor = this.getSuccessor(current)

      current.value = successor.value
      delNode = successor
      this.checkBalance(delNode, false)
      
      return true
    }

    if (current === this.root) {
      this.root = replaceNode
    } else if (current.isLeft) {
      current.parent!.left = replaceNode
    } else {
      current.parent!.right = replaceNode
    }

    // 判断 replaceNode
    if (replaceNode && current.parent) {
      replaceNode.parent = current.parent
    }

    // 删除完成后，检测树是否平衡（传入的节点是那个真正从二叉树中被移除的节点）
    this.checkBalance(delNode, false)
    
    return true
  }

  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取待删除节点的右子树
    let current = delNode.right
    let successor: TreeNode<T> | null = null
    while (current) {
      successor = current
      current = current.left
      if (current) {
        current.parent = successor
      }
    }

    // 拿到后继节点
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      if (successor?.right) {
        successor.right.parent = successor!.parent
      }
    } else {
      delNode.right = successor!.right
      if (successor?.right) {
        successor.right.parent = delNode
      }
    }

    // 将删除节点的 left，赋值给后继节点的 left
    // successor!.left = delNode.left

    return successor!
  }
}

export default BSTree
