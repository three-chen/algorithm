"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root) {
    const arr = inOrder(root);
    console.log(arr);
    let n1 = -1;
    let n2 = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            if (n1 === -1) {
                n1 = i;
            }
            else {
                n2 = i + 1;
            }
        }
    }
    if (n2 === -1) {
        n2 = n1 + 1;
    }
    console.log(n1, n2);
    swap(root, n1, n2);
}
function inOrder(root) {
    const stack = [];
    const r = [];
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        r.push(root.val);
        root = root.right;
    }
    return r;
}
function swap(root, n1, n2) {
    let ro = root;
    let node1 = null;
    let temp = 0;
    const stack = [];
    let i = 0;
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (i === n1) {
            node1 = root;
        }
        else if (i === n2) {
            temp = root.val;
            root.val = node1.val;
            node1.val = temp;
            break;
        }
        i++;
        root = root.right;
    }
}
const _1 = new TreeNode(1, null, null);
const _2 = new TreeNode(2, null, null);
const _4 = new TreeNode(4, _2, null);
const _3 = new TreeNode(3, _1, _4);
recoverTree(_3);
