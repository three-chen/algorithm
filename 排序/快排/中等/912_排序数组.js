"use strict";
function sortArray(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}
function quickSort(nums, start, end) {
    if (start >= end) {
        return;
    }
    let left = start;
    let right = end;
    const base = nums[start];
    while (left < right) {
        while (left < right && nums[right] >= base) {
            right--;
        }
        nums[left] = nums[right];
        while (left < right && nums[left] <= base) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = base;
    quickSort(nums, start, left - 1);
    quickSort(nums, left + 1, end);
}
console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
