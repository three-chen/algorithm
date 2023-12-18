"use strict";
function sortArray(nums) {
    heapSort(nums);
    return nums;
}
// build max heap
function buildMaxHeap(nums, len, index) {
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, len, i);
    }
}
// max heapify
function maxHeapify(nums, len, index) {
    const lChild = 2 * index + 1;
    const rChild = 2 * index + 2;
    let largest = index;
    if (lChild < len && nums[lChild] > nums[largest]) {
        largest = lChild;
    }
    if (rChild < len && nums[rChild] > nums[largest]) {
        largest = rChild;
    }
    if (largest !== index) {
        swap(nums, index, largest);
        maxHeapify(nums, len, largest);
    }
}
// heapSort
function heapSort(nums) {
    buildMaxHeap(nums, nums.length, 0);
    console.log(nums);
    for (let i = nums.length - 1; i > 0; i--) {
        swap(nums, i, 0);
        maxHeapify(nums, i, 0);
    }
}
function swap(nums, a, b) {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
console.log(sortArray([5, 2, 3, 1]));
// console.log(sortArray([5, 1, 1, 2, 0, 0]))
