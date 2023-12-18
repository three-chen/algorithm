"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
// function wiggleSort(nums: number[]): void {
//   nums.sort((a, b) => a - b)
//   const l = nums.length
//   const middle = Math.ceil(l / 2)
//   const lArr = nums.slice(0, middle)
//   const rArr = nums.slice(middle)
//   if (lArr[middle - 1] === rArr[0]) {
//     lArr.reverse()
//     rArr.reverse()
//   }
//   let j = 0
//   for (let i = middle; i < l; i++) {
//     nums[j] = lArr[Math.floor(j / 2)]
//     nums[j + 1] = rArr[Math.floor(j / 2)]
//     j += 2
//   }
//   if (j < l) {
//     nums[j] = lArr[lArr.length - 1]
//   }
// }
// 快排思想
function wiggleSort(nums) {
    const l = nums.length;
    quickSort(nums, 0, l - 1);
    console.log(nums);
}
function quickSort(nums, start, end) {
    if (start >= end - 1) {
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
wiggleSort([1, 5, 1, 1, 6, 4]);
wiggleSort([1, 3, 2, 2, 3, 1]);
wiggleSort([1, 1, 2]);
