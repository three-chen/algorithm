"use strict";
function qs(nums) {
    if (nums.length === 0) {
        return [];
    }
    // quickSort(nums, 0, nums.length - 1)
    quickSort(nums);
    return nums;
}
// 递归
// function quickSort(nums: number[], start: number, end: number) {
//   if (start >= end) {
//     return
//   }
//   const base = nums[start]
//   let left = start
//   let right = end
//   while (left < right) {
//     while (left < right && nums[right] >= base) {
//       right--
//     }
//     nums[left] = nums[right]
//     while (left < right && nums[left] <= base) {
//       left++
//     }
//     nums[right] = nums[left]
//   }
//   nums[left] = base
//   quickSort(nums, start, left - 1)
//   quickSort(nums, left + 1, end)
// }
// 非递归
function quickSort(nums) {
    const stack = [[0, nums.length - 1]];
    while (stack.length > 0) {
        const ele = stack.shift();
        let start = ele[0];
        let end = ele[1];
        let left = start;
        let right = end;
        const base = nums[left];
        if (start >= end) {
            continue;
        }
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
        stack.push([start, left - 1]);
        stack.push([left + 1, end]);
    }
}
console.log(qs([3, 4, 6, 1, 2, 4, 7]));
