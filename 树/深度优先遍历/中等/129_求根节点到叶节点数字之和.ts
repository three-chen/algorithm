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

function sumNumbers(root: TreeNode | null): number {
  let res = { res: 0 }
  backTrace(root, '', res)
  return res.res
}

function backTrace(root: TreeNode | null, sum: string, res: any) {
  if (root === null) return
  sum += root.val
  if (root.left === null && root.right === null) res.res += Number(sum)
  backTrace(root.left, sum, res)
  backTrace(root.right, sum, res)
}
