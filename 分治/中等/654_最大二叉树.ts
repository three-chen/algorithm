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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const l = nums.length
  if (l === 0) return null
  let maxIndex = 0
  for (let i = 1; i < l; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i
    }
  }
  const left = nums.slice(0, maxIndex)
  const right = nums.slice(maxIndex + 1)
  return new TreeNode(nums[maxIndex], constructMaximumBinaryTree(left), constructMaximumBinaryTree(right))
}
