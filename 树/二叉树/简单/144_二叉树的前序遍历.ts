// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function preorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   if (root) {
//     res.push(root.val);
//     res.push(...preorderTraversal(root.left));
//     res.push(...preorderTraversal(root.right));
//   }
//   return res;
// }

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root) {
    const stack: Array<TreeNode> = [root];
    while (stack.length) {
      const node = stack.pop() as TreeNode;
      res.push(node.val);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  return res;
}
