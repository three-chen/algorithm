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

function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, -Infinity, Infinity)
}

function isValid(root: TreeNode | null, min: number, max: number): boolean {
  if (root === null) {
    return true
  }
  if (root.left === null && root.right === null) {
    return true
  }
  if (root.left && (root.left.val >= root.val || root.left.val <= min)) {
    return false
  }
  if (root.right && (root.right.val <= root.val || root.right.val >= max)) {
    return false
  }
  return isValid(root.left, min, Math.min(max, root.val)) && isValid(root.right, Math.max(min, root.val), max)
}
