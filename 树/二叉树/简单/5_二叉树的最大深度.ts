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

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  const stack = [root]
  let flag = 0
  while (stack.length > 0) {
    const l = stack.length
    for (let i = 0; i < l; i++) {
      const node = stack.shift()
      if (node!.left) {
        stack.push(node!.left)
      }
      if (node!.right) {
        stack.push(node!.right)
      }
    }
    flag++
  }
  return flag
}
