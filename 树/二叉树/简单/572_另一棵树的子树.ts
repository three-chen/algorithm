function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) {
    if (subRoot === null) return true;
    return false;
  }
  if (compareSub(root, subRoot)) {
    return true;
  }
  return (
    isSubtree(root?.left || null, subRoot) ||
    isSubtree(root?.right || null, subRoot)
  );
}

function compareSub(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null && subRoot === null) {
    return true;
  }
  if (root?.val === subRoot?.val) {
    return (
      compareSub(root?.left || null, subRoot?.left || null) &&
      compareSub(root?.right || null, subRoot?.right || null)
    );
  }
  return false;
}
