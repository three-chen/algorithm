"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function isSymmetric(root) {
    if (root === null) {
        return true;
    }
    if (root.left && root.right) {
        const lStack = [root.left];
        const rStack = [root.right];
        while (lStack.length > 0) {
            const lNode = lStack.shift();
            const rNode = rStack.shift();
            console.log('lNode: ', lNode.val, ' rNode: ', rNode.val);
            if (lNode.val !== rNode.val) {
                return false;
            }
            if (lNode.left && rNode.right) {
                lStack.push(lNode.left);
                rStack.push(rNode.right);
            }
            else if (!lNode.left && !rNode.right) {
            }
            else {
                return false;
            }
            if (lNode.right && rNode.left) {
                lStack.push(lNode.right);
                rStack.push(rNode.left);
            }
            else if (!lNode.right && !rNode.left) {
            }
            else {
                return false;
            }
        }
        if (rStack.length > 0) {
            return false;
        }
        return true;
    }
    else {
        return false;
    }
}
const _l3 = new TreeNode(3, null, null);
const _l4 = new TreeNode(4, null, null);
const _r4 = new TreeNode(4, null, null);
const _r3 = new TreeNode(3, null, null);
const _l2 = new TreeNode(2, _l3, _l4);
const _r2 = new TreeNode(2, _r4, _r3);
const _root1 = new TreeNode(1, _l2, _r2);
console.log(isSymmetric(_root1));
