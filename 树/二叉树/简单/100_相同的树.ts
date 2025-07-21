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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const stackp: (TreeNode | null)[] = [p];
  const stackq: (TreeNode | null)[] = [q];
  while (stackp.length && stackq.length) {
    const nodep = stackp.shift()!;
    const nodeq = stackq.shift()!;
    if (nodep?.val !== nodeq?.val) {
      return false;
    }
    nodep && stackp.push(nodep.left, nodep.right);
    nodeq && stackq.push(nodeq.left, nodeq.right);
  }
  if (stackp.length > 0 || stackq.length > 0) {
    return false;
  }
  return true;
}
