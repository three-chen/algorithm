// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let aim: ListNode | null = null,
    end: ListNode | null = head
  let t = n
  while (t > 0) {
    end = end!.next
    t--
  }
  aim = head
  if (end === null) return head!.next
  while (end!.next !== null) {
    end = end!.next
    aim = aim!.next
  }
  aim!.next = aim!.next!.next
  return head
}
