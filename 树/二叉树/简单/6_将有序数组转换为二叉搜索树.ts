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
  if (nums.length === 0) {
    return null
  }
  const idx = Math.floor(nums.length / 2)
  const rNum = nums[idx]
  const l = nums.slice(0, idx)
  const r = nums.slice(idx + 1)
  const root = new TreeNode(rNum, sortedArrayToBST(l), sortedArrayToBST(r))
  return root
}
