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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;
  const stack = [root];
  while (stack.length) {
    ans++;
    const node = stack.shift() as TreeNode;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return ans;
}
