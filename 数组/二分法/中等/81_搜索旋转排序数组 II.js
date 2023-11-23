"use strict";
function search(nums, target) {
    const l = nums.length;
    const res = erfen(nums, target, 0, l - 1);
    return res;
}
function erfen(nums, target, start, end) {
    if (start > end)
        return false;
    if (start === end)
        return nums[start] === target;
    const middle = Math.floor((end + start) / 2);
    let left = false, right = false;
    if (nums[middle] === target) {
        return true;
    }
    else {
        left = erfen(nums, target, start, middle - 1);
        right = erfen(nums, target, middle + 1, end);
    }
    console.log(start, end, left, right);
    return left === false ? right : left;
}
console.log(search([1, 0, 1, 1, 1], 0));
