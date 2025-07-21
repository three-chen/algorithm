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

function isSymmetric(p: TreeNode | null): boolean {
  if (p?.left?.val !== p?.right?.val) {
    return false;
  }
  return innerSymertic(p?.left, p?.right);
}

function innerSymertic(
  left: TreeNode | null | undefined,
  right: TreeNode | null | undefined
): boolean {
  if (!left && !right) {
    return true;
  } else if ((!left && right) || (left && !right)) {
    return false;
  }

  if (
    left!.left?.val !== right!.right?.val ||
    left!.right?.val !== right!.left?.val
  ) {
    return false;
  }
  return (
    innerSymertic(left?.left, right?.right) &&
    innerSymertic(left?.right, right?.left)
  );
}
