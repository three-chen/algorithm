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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) return []
  const res: number[][] = []
  const cur: number[] = []
  const curSum = 0
  huisu(root, targetSum, curSum, cur, res)
  return res
}

function huisu(node: TreeNode | null, targetSum: number, curSum: number, cur: number[], res: number[][]) {
  if (node === null) return
  cur.push(node.val)
  curSum += node.val

  huisu(node.left, targetSum, curSum, cur, res)
  huisu(node.right, targetSum, curSum, cur, res)

  if (node.left === null && node.right === null) {
    if (targetSum === curSum) {
      let arr: number[] = []
      res.push(Object.assign(arr, cur))
    }
  }
  curSum -= node.val
  cur.pop()
}
