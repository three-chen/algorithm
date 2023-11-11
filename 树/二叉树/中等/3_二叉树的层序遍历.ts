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

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }
  const stack = [[0, root]]
  const res: number[][] = []
  while (stack.length > 0) {
    const indexNode = stack.shift()
    const index = indexNode![0] as number
    const node = indexNode![1] as TreeNode
    if (res[index] === undefined) {
      res[index] = []
    }
    res[index].push(node.val)
    if (node.left) {
      stack.push([index + 1, node.left])
    }
    if (node.right) {
      stack.push([index + 1, node.right])
    }
  }
  return res
}

const _r15 = new TreeNode(15, null, null)
const _r7 = new TreeNode(7, null, null)
const _l9 = new TreeNode(9, null, null)
const _r20 = new TreeNode(20, _r15, _r7)
const _root1 = new TreeNode(3, _l9, _r20)
console.log(levelOrder(_root1))
