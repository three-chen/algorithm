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

function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []
  const res: number[] = []
  const stack: Array<[TreeNode, boolean]> = [[root, false]]
  while (stack.length > 0) {
    const [node, flag] = stack.pop()
    if (node === null) continue
    if (flag === true) {
      res.push(node.val)
    } else {
      stack.push([node, true])
      stack.push([node.right, false])
      stack.push([node.left, false])
    }
  }
  return res
}
