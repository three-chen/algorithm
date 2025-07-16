/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null
  let slow = head,
    fast = head.next
  while (fast !== null && slow !== fast) {
    fast = fast.next
    if (fast === null) return null
    fast = fast.next
    slow = slow.next
  }
  if (fast === null) return null
  slow = slow.next
  let ptr = head
  while (ptr !== slow) {
    ptr = ptr.next
    slow = slow.next
  }
  return ptr
}
