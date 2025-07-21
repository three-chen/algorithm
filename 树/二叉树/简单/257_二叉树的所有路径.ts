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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return [];
  const cur: number[] = [];
  const ans: number[][] = [];
  backTracking(root, cur, ans);
  return ans.map((arr) => arr.join("->"));
}

function backTracking(root: TreeNode, cur: number[], ans: number[][]) {
  if (!root.left && !root.right) {
    ans.push([...cur, root.val]);
    return;
  }

  if (root.left) {
    cur.push(root.val);
    backTracking(root.left, cur, ans);
    cur.pop();
  }
  if (root.right) {
    cur.push(root.val);
    backTracking(root.right, cur, ans);
    cur.pop();
  }
}
