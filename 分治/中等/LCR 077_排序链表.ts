// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function sortList(head: ListNode | null): ListNode | null {
  return mergeSort(head, null)
}

function mergeSort(head: ListNode | null, tail: ListNode | null): ListNode | null {
  if (head === null) return null
  if (head.next === tail) {
    head.next = null
    return head
  }
  let slow: ListNode | null = head,
    fast: ListNode | null = head
  while (fast !== tail) {
    fast = fast!.next
    if (fast !== tail) {
      fast = fast!.next
      slow = slow!.next
    }
  }

  const left = mergeSort(head, slow)
  const right = mergeSort(slow, tail)

  return merge(left, right)
}

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
  if (left === null) return null
  if (right === null) return left
  let leftPtr: ListNode | null = left
  let rightPtr: ListNode | null = right
  const dummyHead: ListNode | null = new ListNode(0)
  let temp: ListNode | null = dummyHead
  while (leftPtr && rightPtr) {
    if (leftPtr.val < rightPtr.val) {
      temp!.next = leftPtr
      leftPtr = leftPtr.next
    } else {
      temp!.next = rightPtr
      rightPtr = rightPtr.next
    }
    temp = temp!.next
  }
  if (leftPtr) {
    temp.next = leftPtr
  }
  if (rightPtr) {
    temp.next = rightPtr
  }
  return dummyHead.next
}

const _3 = new ListNode(3, null)
const _1 = new ListNode(1, _3)
const _2 = new ListNode(2, _1)
const _4 = new ListNode(4, _2)

console.log(sortList(_4))
