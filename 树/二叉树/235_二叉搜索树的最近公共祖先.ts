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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let ans: any = {
    res: null
  }
  lowest(root, p, q, ans)
  return ans.res
}

function lowest(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null, ans: any): number {
  if (root === null) return 0
  let state = lowest(root.left, p, q, ans) + lowest(root.right, p, q, ans)
  if (root === p || root === q) {
    state++
  }
  if (state === 2) {
    if (ans.res === null) ans.res = root
    return 2
  }
  return state
}
