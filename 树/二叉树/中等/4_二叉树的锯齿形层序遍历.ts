// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }
  const stack = [root]
  const res: number[][] = []
  let flag = 0
  while (stack.length > 0) {
    const l = stack.length
    res[flag] = []
    for (let i = 0; i < l; i++) {
      const node = stack.shift()
      // 说明这一层是从左往右
      if (flag % 2 === 0) {
        res[flag].push(node!.val)
      }
      // 说明下一层是从右往左
      else {
        res[flag].unshift(node!.val)
      }
      if (node!.left) {
        stack.push(node!.left)
      }
      if (node!.right) {
        stack.push(node!.right)
      }
    }
    flag++
  }
  return res
}

const _r15 = new TreeNode(15, null, null)
const _r7 = new TreeNode(7, null, null)
const _l9 = new TreeNode(9, null, null)
const _r20 = new TreeNode(20, _r15, _r7)
const _root1 = new TreeNode(3, _l9, _r20)
console.log(zigzagLevelOrder(_root1))
