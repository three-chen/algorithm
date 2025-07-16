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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  flat(root)
}

function flat(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  let leftTail = flat(root.left)
  let rightTail = flat(root.right)

  let left = root.left
  let right = root.right
  if (leftTail !== null && right !== null) {
    leftTail.right = right
    root.right = left
    root.left = null
  } else if (leftTail !== null) {
    root.right = left
    root.left = null
    rightTail = leftTail
  }
  return rightTail === null ? root : rightTail
}
