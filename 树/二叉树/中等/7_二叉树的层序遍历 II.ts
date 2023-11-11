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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }
  const stack = [root]
  const res: number[][] = []
  while (stack.length > 0) {
    const l = stack.length
    const arr = []
    for (let i = 0; i < l; i++) {
      const node = stack.shift()
      arr.push(node!.val)
      if (node!.left) {
        stack.push(node!.left)
      }
      if (node!.right) {
        stack.push(node!.right)
      }
    }
    res.unshift(arr)
  }
  return res
}
