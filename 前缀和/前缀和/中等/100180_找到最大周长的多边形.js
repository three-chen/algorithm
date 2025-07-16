"use strict";
function largestPerimeter(nums) {
    nums.sort((a, b) => a - b);
    const l = nums.length;
    const sums = new Array(l).fill(0);
    sums[0] = nums[0];
    for (let i = 1; i < l; i++) {
        sums[i] = sums[i - 1] + nums[i];
    }
    let count = 0;
    for (let i = l - 2; i >= 0; i--) {
        if (nums[i + 1] < sums[i]) {
            count = i + 2;
            break;
        }
    }
    if (count !== 0)
        return sums[count - 1];
    return -1;
}
console.log(largestPerimeter([5, 5, 5]));
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]));
console.log(largestPerimeter([5, 5, 50]));
