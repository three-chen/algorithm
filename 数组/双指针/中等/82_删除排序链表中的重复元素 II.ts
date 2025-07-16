// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  let left: ListNode | null = head,
    right: ListNode | null = head.next
  let root: ListNode | null = null,
    cur: ListNode | null = null
  while (right !== null) {
    if (right!.val !== left.val) {
      if (left.next === right && root === null) {
        root = left
        cur = root
      } else if (left.next === right) {
        cur!.next = left
        cur = cur!.next
      }
      left = right
    }
    right = right!.next
  }
  if (left.next === right) {
    if (cur === null) {
      root = left
      cur = left
    } else {
      cur!.next = left
      cur = cur!.next
    }
  }
  if (cur === null) return null
  cur!.next = null
  return root
}
