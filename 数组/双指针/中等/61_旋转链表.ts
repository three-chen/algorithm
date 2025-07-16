// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let aim: ListNode | null = null,
    end: ListNode | null = head
  let l = getListLen(head)
  if (l <= 1) return head
  let mk = k % l
  if (mk === 0) return head
  while (mk > 0) {
    end = end!.next
    mk--
  }
  aim = head
  while (end!.next !== null) {
    end = end!.next
    aim = aim!.next
  }
  const root = aim!.next
  aim!.next = null
  end!.next = head
  return root
}

function getListLen(head: ListNode | null): number {
  let len = 0
  while (head !== null) {
    len++
    head = head.next
  }
  return len
}
