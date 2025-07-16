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

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0
  const stack = [root]
  let minH = 1
  while (stack.length > 0) {
    const l = stack.length
    for (let i = 0; i < l; i++) {
      const node = stack.shift()
      if (node.left === null && node.right === null) {
        return minH
      }
      if (node.left !== null) {
        stack.push(node.left)
      }
      if (node.right !== null) {
        stack.push(node.right)
      }
    }
    minH++
  }
  return 0
}
