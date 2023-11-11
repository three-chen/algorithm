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

// 栈优化递归
function inorderTraversal(root: TreeNode | null): number[] {
  const stack = []
  const r = []
  let n: any = root
  while (n || stack.length > 0) {
    while (n) {
      stack.push(n)
      n = n.left
    }
    n = stack.pop()
    r.push(n.val)
    n = n.right
  }
  return r
}

// 递归
// function inorderTraversal(root: TreeNode | null): number[] {
//   if (root === null) {
//     return []
//   }
//   const r: number[] = []
//   if (root.left) {
//     r.push(...inorderTraversal(root.left))
//   }
//   r.push(root.val)
//   if (root.right) {
//     r.push(...inorderTraversal(root.right))
//   }
//   return r
// }

const le = new TreeNode(3, null, null)
const ri = new TreeNode(2, le, null)
const ro = new TreeNode(1, null, ri)

console.log(inorderTraversal(ro))
