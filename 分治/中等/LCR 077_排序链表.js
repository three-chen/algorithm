"use strict";
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function sortList(head) {
    return mergeSort(head, null);
}
function mergeSort(head, tail) {
    if (head === null)
        return null;
    if (head.next === tail) {
        head.next = null;
        return head;
    }
    let slow = head, fast = head;
    while (fast !== tail) {
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
            slow = slow.next;
        }
    }
    console.log(head);
    console.log(slow);
    console.log(tail);
    console.log('---------------');
    const left = mergeSort(head, slow);
    const right = mergeSort(slow, tail);
    console.log('left----right');
    console.log(left);
    console.log(right);
    console.log('left----right');
    return merge(left, right);
}
function merge(left, right) {
    if (left === null)
        return null;
    if (right === null)
        return left;
    let leftPtr = left;
    let rightPtr = right;
    const dummyHead = new ListNode(0);
    let temp = dummyHead;
    while (leftPtr && rightPtr) {
        if (leftPtr.val < rightPtr.val) {
            temp.next = leftPtr;
            leftPtr = leftPtr.next;
        }
        else {
            temp.next = rightPtr;
            rightPtr = rightPtr.next;
        }
        temp = temp.next;
    }
    if (leftPtr) {
        temp.next = leftPtr;
    }
    if (rightPtr) {
        temp.next = rightPtr;
    }
    return dummyHead.next;
}
const _3 = new ListNode(3, null);
const _1 = new ListNode(1, _3);
const _2 = new ListNode(2, _1);
const _4 = new ListNode(4, _2);
console.log(sortList(_4));
