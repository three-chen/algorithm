"use strict";
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function sortList(head) {
    let l = 0;
    let cur = head;
    while (cur) {
        l++;
        cur = cur.next;
    }
    console.log(l);
    if (l < 2)
        return head;
    const middle = Math.floor(l / 2);
    let leftH = head;
    let rightH = null;
    //   console.log('before ', leftH)
    //   console.log('before ', rightH)
    cur = head;
    for (let i = 0; i < middle - 1; i++) {
        cur = cur.next;
    }
    rightH = cur.next;
    cur.next = null;
    console.log('after ', leftH);
    console.log('after ', rightH);
    return merge(sortList(leftH), sortList(rightH));
}
function merge(left, right) {
    let lptr = left, rptr = right;
    const head = new ListNode();
    if (lptr.val <= rptr.val) {
        head.val = lptr.val;
        lptr = lptr.next;
    }
    else {
        head.val = rptr.val;
        rptr = rptr.next;
    }
    let cur = head;
    while (lptr && rptr) {
        if (lptr.val <= rptr.val) {
            cur.next = lptr;
            lptr = lptr.next;
        }
        else {
            cur.next = rptr;
            rptr = rptr.next;
        }
        cur = cur.next;
    }
    while (lptr) {
        cur.next = lptr;
        cur = cur.next;
        lptr = lptr.next;
    }
    while (rptr) {
        cur.next = rptr;
        cur = cur.next;
        rptr = rptr.next;
    }
    return head;
}
const _3 = new ListNode(3, null);
const _1 = new ListNode(1, _3);
const _2 = new ListNode(2, _1);
const _4 = new ListNode(4, _2);
console.log(sortList(_4));
