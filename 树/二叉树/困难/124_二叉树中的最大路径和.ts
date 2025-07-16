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
function maxPathSum(root: TreeNode | null): number {
  let a = { max: -Infinity }
  maxGain(root, a)
  return a.max
}

function maxGain(root: TreeNode | null, a: any): number {
  if (root === null) return 0
  const leftGain = Math.max(maxGain(root.left, a), 0)
  const rightGain = Math.max(maxGain(root.right, a), 0)
  a.max = Math.max(leftGain + rightGain + root.val, a.max)
  return Math.max(leftGain, rightGain) + root.val
}
