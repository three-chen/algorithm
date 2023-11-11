"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function zigzagLevelOrder(root) {
    if (root === null) {
        return [];
    }
    const stack = [[0, root]];
    const res = [];
    while (stack.length > 0) {
        const indexNode = stack.shift();
        const index = indexNode[0];
        const node = indexNode[1];
        if (res[index] === undefined) {
            res[index] = [];
        }
        res[index].push(node.val);
        console.log(index);
        // 偶数是左往右遍历
        if (index % 2 === 0) {
            if (node.left) {
                stack.push([index + 1, node.left]);
            }
            if (node.right) {
                stack.push([index + 1, node.right]);
            }
        }
        // 奇数是右往左遍历
        else {
            if (node.right) {
                stack.push([index + 1, node.right]);
            }
            if (node.left) {
                stack.push([index + 1, node.left]);
            }
        }
    }
    return res;
}
const _r15 = new TreeNode(15, null, null);
const _r7 = new TreeNode(7, null, null);
const _l9 = new TreeNode(9, null, null);
const _r20 = new TreeNode(20, _r15, _r7);
const _root1 = new TreeNode(3, _l9, _r20);
console.log(zigzagLevelOrder(_root1));
