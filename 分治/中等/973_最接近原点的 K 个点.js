"use strict";
function kClosest(points, k) {
    const l = points.length;
    const distance = new Array(l).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < l; i++) {
        distance[i][0] = points[i][0] ** 2 + points[i][1] ** 2;
        distance[i][1] = i;
    }
    const res = [];
    buildMinHeap(distance);
    for (let i = 0; i < k; i++) {
        res.push(points[distance[0][1]]);
        console.log(`before swap ${l - i - 1} and 0`, distance);
        swap(distance, l - i - 1, 0);
        console.log(`after swap ${l - i - 1} and 0`, distance);
        heapify(distance, l - i - 1, 0);
        console.log(distance);
    }
    return res;
}
function buildMinHeap(nums) {
    const l = nums.length;
    for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
        heapify(nums, l, i);
    }
}
function heapify(nums, len, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let max = index;
    if (left < len && nums[max][0] > nums[left][0]) {
        max = left;
    }
    if (right < len && nums[max][0] > nums[right][0]) {
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
console.log(kClosest([
    [6, 10],
    [-3, 3],
    [-2, 5],
    [0, 2]
], 3));
