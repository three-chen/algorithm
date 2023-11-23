"use strict";
function findMin(nums) {
    const l = nums.length;
    return erfen(nums, 0, l - 1);
}
function erfen(nums, start, end) {
    const l = nums.length;
    const base = Math.floor((start + end) / 2);
    if (base + 1 < l && base - 1 >= 0) {
        if (nums[base] < nums[base + 1] && nums[base] < nums[base - 1]) {
            return nums[base];
        }
    }
    else if (base - 1 >= 0) {
        if (nums[base] < nums[base - 1]) {
            return nums[base];
        }
    }
    else {
        if (nums[base] < nums[base + 1]) {
            return nums[base];
        }
    }
    return Math.min(erfen(nums, start, base - 1), erfen(nums, base + 1, end));
}
console.log(findMin([3, 4, 5, 1, 2]));
