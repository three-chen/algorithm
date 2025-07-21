/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const stack = [root];
  while (stack.length) {
    const nodes = stack.splice(0);
    const level: number[] = [];
    nodes.forEach((node) => {
      level.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    });
    res.push(level);
  }
  return res;
}
