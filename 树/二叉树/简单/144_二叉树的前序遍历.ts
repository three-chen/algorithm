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

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: Array<TreeNode | null | number> = [root]
  while (stack.length > 0) {
    const el = stack.pop()
    if (el === null) continue
    if (el instanceof Object) {
      stack.push(el.right)
      stack.push(el.left)
      stack.push(el.val)
    }
    if (typeof el === 'number') res.push(el)
  }
  return res
}
