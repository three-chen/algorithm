function diameterOfBinaryTree(root: TreeNode | null): number {
  return globalResolve(root).max;
}

function globalResolve(root: TreeNode | null): { height: number; max: number } {
  if (!root) {
    return { height: -1, max: 0 };
  }
  if (!root.left && !root.right) {
    return { height: 0, max: 0 };
  }
  const leftInfo = globalResolve(root.left || null);
  const rightInfo = globalResolve(root.right || null);

  return {
    height: Math.max(leftInfo.height, rightInfo.height) + 1,
    max: Math.max(
      leftInfo.max,
      rightInfo.max,
      leftInfo.height + 2 + rightInfo.height
    ),
  };
}
