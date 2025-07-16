"use strict";
function incremovableSubarrayCount(nums) {
    const l = nums.length;
    let res = 0;
    for (let i = 0; i < l; i++) {
        for (let j = i; j < l; j++) {
            const narr = Array.from(nums);
            narr.splice(i, j - i + 1);
            if (isDizen(narr))
                res++;
        }
    }
    return res;
}
function isDizen(nums) {
    const l = nums.length;
    if (l === 0)
        return true;
    for (let i = 0; i < l - 1; i++) {
        if (nums[i + 1] <= nums[i])
            return false;
    }
    return true;
}
console.log(incremovableSubarrayCount([1, 2, 3, 4]));
console.log(incremovableSubarrayCount([6, 5, 7, 8]));
console.log(incremovableSubarrayCount([8, 7, 6, 6]));
console.log(incremovableSubarrayCount([2, 1]));
