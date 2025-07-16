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

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false
  let slow = head.next,
    fast = head.next.next
  while (fast !== null && fast !== slow) {
    fast = fast.next
    if (fast === null) {
      break
    }
    fast = fast.next
    slow = slow.next
  }
  if (fast === slow) return true
  return false
}
