// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  let left: ListNode | null = null,
    right: ListNode | null = head

  let arr: number[] = []
  while (right !== null) {
    if (right.val < x) {
      if (left === null) {
        left = head
      } else {
        left = left.next
      }
      swap(left!, right)
    } else {
      arr.push(right.val)
    }
    right = right.next
  }
  while (arr.length > 0) {
    if (left === null) {
      left = head
    } else {
      left = left!.next
    }
    left!.val = arr.shift()!
  }
  return head
}

function swap(node1: ListNode, node2: ListNode) {
  const temp = node1.val
  node1.val = node2.val
  node2.val = temp
}
