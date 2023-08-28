import BSTree, { TreeNode } from './BSTree'
import AVLTreeNode from './02-封装AVLTreeNode（左、右旋转操作）'

class AVLTree<T> extends BSTree<T> {
  // 找到不平衡的节点

  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode(value)
  }

  // 查找不平衡的节点，并对该节点进行再平衡
  protected checkBalance(node: AVLTreeNode<T>, isAdd = true) {
    let current = node.parent

    while (current) {
      if (!current.isBalance) {
        this.rebalance(current)
        // 这个位置是旋转完成后的操作
        // break 决定不会进一步去查找父节点有没有平衡的情况
        // insert，不需要进一步向上查找父节点，直接 break；
        // delete，需要进一步向上查找，不能 break
        if (isAdd) break
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

const delNums: number[] = []
for (let i = 0; i < 20; i++) {
  const randomNum = Math.floor(Math.random() * 200)

  if (i % 2 === 0 && delNums.length < 10) {
    delNums.push(randomNum)
  }

  avlTree.insert(randomNum)
}

console.log('delNums:', delNums)
avlTree.print()

for (const delNum of delNums) {
  avlTree.remove(delNum)
  console.log('删除了：', delNum)
  avlTree.print()
}
