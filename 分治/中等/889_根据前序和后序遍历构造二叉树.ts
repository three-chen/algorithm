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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null
  const num = preorder[0]
  const l1 = preorder[1]
  const index = postorder.indexOf(l1)
  const leftPre = preorder.slice(1, index + 2)
  const rightPre = preorder.slice(index + 2)
  const leftPost = postorder.slice(0, index + 1)
  const rightPost = postorder.slice(index + 1, -1)
  const root = new TreeNode(num, constructFromPrePost(leftPre, leftPost), constructFromPrePost(rightPre, rightPost))
  return root
}
