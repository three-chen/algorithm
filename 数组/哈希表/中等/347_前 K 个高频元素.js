"use strict";
function topKFrequent(nums, k) {
    const map = new Map();
    nums.forEach(value => {
        if (map.get(value) !== undefined) {
            map.set(value, map.get(value) + 1);
        }
        else {
            map.set(value, 1);
        }
    });
    const heap = [];
    map.forEach((occurTime, num) => {
        heap.push([num, occurTime]);
    });
    const l = heap.length;
    const res = [];
    for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
        maxHeapify(heap, l, i);
    }
    console.log(heap);
    for (let i = 0; i < k; i++) {
        res.push(heap[0][0]);
        console.log('swap', 0, l - i - 1);
        swap(heap, 0, l - i - 1);
        maxHeapify(heap, l - i - 1, 0);
        console.log(heap);
    }
    return res;
}
function maxHeapify(nums, l, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let max = index;
    while (left < l && nums[left][1] > nums[max][1]) {
        max = left;
    }
    while (right < l && nums[right][1] > nums[max][1]) {
        max = right;
    }
    if (max !== index) {
        swap(nums, index, max);
        maxHeapify(nums, l, max);
    }
}
function swap(nums, a, b) {
    const t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
