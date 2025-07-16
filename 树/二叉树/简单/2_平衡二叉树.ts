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

// function isBalanced(root: TreeNode | null): boolean {
//   if (root === null) {
//     return true
//   } else {
//     return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
//   }
// }

// function height(root: TreeNode | null): number {
//   if (root === null) {
//     return 0
//   }
//   return Math.max(height(root.left), height(root.right)) + 1
// }
function isBalanced(root: TreeNode | null): boolean {
  return height(root) >= 0
}

function height(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  const leftHeight = height(root.left)
  const rightHeight = height(root.right)
  if (Math.abs(leftHeight - rightHeight) > 1 || leftHeight === -1 || rightHeight === -1) return -1
  return Math.max(leftHeight, rightHeight) + 1
}
