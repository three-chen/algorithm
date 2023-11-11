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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null
  }
  const rNum = preorder[0]
  const index = inorder.indexOf(rNum)
  let root: TreeNode | null = null
  try {
    const preLeftTree = preorder.slice(1, index + 1)
    const preRightTree = preorder.slice(index + 1)
    const inLeftTree = inorder.slice(0, index)
    const inRightTree = inorder.slice(index + 1)
    root = new TreeNode(rNum, buildTree(preLeftTree, inLeftTree), buildTree(preRightTree, inRightTree))
  } catch (error) {
    return null
  }
  return root
}
