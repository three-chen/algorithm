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

function deduceTree(preorder: number[], inorder: number[]): TreeNode | null {
  const l = preorder.length
  if (l === 0) return null

  const cur = preorder[0]
  const index = inorder.indexOf(cur)
  const leftProrder = preorder.slice(1, index + 1)
  const rightProrder = preorder.slice(index + 1)
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1)
  return new TreeNode(cur, deduceTree(leftProrder, leftInorder), deduceTree(rightProrder, rightInorder))
}
