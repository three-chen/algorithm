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

function genNode(start: number, end: number): Array<TreeNode | null> {
  if (start > end) {
    return [null];
  }
  const nodes: Array<TreeNode | null> = [];
  for (let i = start; i <= end; i++) {
    const leftTrees = genNode(start, i - 1);
    const rightTrees = genNode(i + 1, end);

    leftTrees.forEach((leftTree) => {
      rightTrees.forEach((rightTree) => {
        const node = new TreeNode(i, leftTree, rightTree);
        nodes.push(node);
      });
    });
  }
  return nodes;
}

function generateTrees(n: number): Array<TreeNode | null> {
  if (n < 1) {
    return [null];
  }
  return genNode(1, n);
}
