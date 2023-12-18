"use strict";
function kthLargestValue(matrix, k) {
    const row = matrix.length;
    const column = matrix[0].length;
    const dp = new Array(row).fill(0).map(() => new Array(column));
    dp[0][0] = matrix[0][0];
    for (let i = 1; i < column; i++) {
        dp[0][i] = matrix[0][i] ^ dp[0][i - 1];
    }
    for (let i = 1; i < row; i++) {
        dp[i][0] = matrix[i][0] ^ dp[i - 1][0];
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            dp[i][j] = dp[i - 1][j] ^ dp[i][j - 1] ^ dp[i - 1][j - 1] ^ matrix[i][j];
        }
    }
    console.log(dp);
    const nums = [];
    for (let i = 0; i < row; i++) {
        nums.push(...dp[i]);
    }
    console.log(nums);
    const l = nums.length;
    let res = Infinity;
    buildMaxHeap(nums);
    for (let i = 0; i < k; i++) {
        if (i === k - 1) {
            res = nums[0];
            break;
        }
        swap(nums, 0, l - i - 1);
        heapify(nums, l - i - 2, 0);
    }
    return res;
}
function buildMaxHeap(nums) {
    const l = nums.length;
    for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
        heapify(nums, l, i);
    }
}
function heapify(nums, len, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let max = index;
    if (left < len && nums[left] > nums[max]) {
        max = left;
    }
    if (right < len && nums[right] > nums[max]) {
        max = right;
    }
    if (max !== index) {
        swap(nums, max, index);
        heapify(nums, len, max);
    }
}
function swap(nums, index1, index2) {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
console.log(kthLargestValue([
    [5, 2],
    [1, 6]
], 2));
