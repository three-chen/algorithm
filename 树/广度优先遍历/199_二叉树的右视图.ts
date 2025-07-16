/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return []
  const res: number[] = []
  const stack: Array<TreeNode> = [root]
  while (stack.length > 0) {
    const l = stack.length
    res.push(stack[l - 1].val)
    for (let i = 0; i < l; i++) {
      const el = stack[i]
      if (el.left) stack.push(el.left)
      if (el.right) stack.push(el.right)
    }
    stack.splice(0, l)
  }
  return res
}
