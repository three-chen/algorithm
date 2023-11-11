"use strict";
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }
    const rNum = postorder[postorder.length - 1];
    const index = inorder.indexOf(rNum);
    let root = null;
    try {
        const inLeftTree = inorder.slice(0, index);
        const inRightTree = inorder.slice(index + 1);
        const postLeftTree = postorder.slice(0, index);
        const postRightTree = postorder.slice(index, postorder.length - 2);
        console.log('inLeft: ', inLeftTree, 'inRight: ', inRightTree, 'postLeft: ', postLeftTree, 'postRight: ', postRightTree);
        root = new TreeNode(rNum, buildTree(inLeftTree, postLeftTree), buildTree(inRightTree, postRightTree));
    }
    catch (error) {
        return null;
    }
    return root;
}
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
