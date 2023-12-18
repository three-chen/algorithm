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

function balanceBST(root: TreeNode | null): TreeNode | null {
  const inorderArr = inorder(root)
  return gen(inorderArr)
}

function inorder(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: Array<TreeNode | null> = [root]
  let label = stack[0]
  while (label!.left) {
    stack.push(label!.left)
    label = label!.left
  }
  while (stack.length > 0) {
    const node = stack.pop()
    res.push(node!.val)
    label = node!.right
    if (label) {
      stack.push(label)
      while (label.left) {
        stack.push(label.left)
        label = label!.left
      }
    }
  }
  return res
}

function gen(nums: number[]): TreeNode | null {
  const l = nums.length
  if (l === 0) return null
  const middle = Math.floor(l / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle + 1)
  return new TreeNode(nums[middle], gen(left), gen(right))
}
