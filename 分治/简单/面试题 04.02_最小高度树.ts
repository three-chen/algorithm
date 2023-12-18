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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const l = nums.length
  if (l === 0) return null
  const middle = Math.floor(l / 2)

  const left = nums.slice(0, middle)
  const right = nums.slice(middle + 1)

  return new TreeNode(nums[middle], sortedArrayToBST(left), sortedArrayToBST(right))
}
