// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  return toBST(head, null)
}

function toBST(head: ListNode | null, tail: ListNode | null): TreeNode | null {
  if (head === tail) {
    return null
  }
  const middle = getMedian(head, tail)
  let root: TreeNode | null = null
  if (middle) {
    root = new TreeNode(middle.val, toBST(head, middle), toBST(middle.next, tail))
  }
  return root
}

function getMedian(head: ListNode | null, tail: ListNode | null): ListNode | null {
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast !== tail && fast!.next !== tail) {
    fast = fast!.next!.next
    slow = slow!.next
  }
  return slow
}
