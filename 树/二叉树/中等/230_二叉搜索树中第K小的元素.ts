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

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: Array<[TreeNode | null, boolean]> = [[root, false]]
  let count = 0
  while (stack.length > 0) {
    const [node, flag] = stack.pop()!
    if (node === null) continue
    if (flag === false) {
      stack.push([node.right, false])
      stack.push([node, true])
      stack.push([node.left, false])
    } else {
      count++
      if (count === k) {
        return node.val
      }
    }
  }
  return -1
}
