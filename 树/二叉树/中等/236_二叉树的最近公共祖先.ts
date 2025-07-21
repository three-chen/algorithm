function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let finalNode: { finalNode: TreeNode | null } = { finalNode: null };
  traverse(root, p, q, finalNode);
  return finalNode.finalNode;
}

function traverse(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
  finalNode: { finalNode: TreeNode | null }
): { p: boolean; q: boolean } {
  const cur = { p: false, q: false };
  if (finalNode.finalNode || !root) {
    return cur;
  }
  if (root === p) {
    cur.p = true;
  }
  if (root === q) {
    cur.q = true;
  }

  const leftRes = traverse(root.left, p, q, finalNode);
  const rightRes = traverse(root.right, p, q, finalNode);
  let finalRes = {
    p: cur.p || leftRes.p || rightRes.p,
    q: cur.q || leftRes.q || rightRes.q,
  };
  if (finalRes.p && finalRes.q && !finalNode.finalNode) {
    finalNode.finalNode = root;
  }
  return finalRes;
}
