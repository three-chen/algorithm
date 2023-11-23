"use strict";
function maxProduct(nums) {
    const l = nums.length;
    const dp = new Array(l).fill(0);
    dp[0] = nums[0];
    let max = -Infinity;
    for (let i = 1; i < l; i++) {
        max = nums[i];
        let cur = nums[i];
        for (let j = i - 1; j >= 0; j--) {
            cur = cur * nums[j];
            if (cur > max) {
                max = cur;
            }
        }
        dp[i] = max;
    }
    console.log(dp);
    max = Math.max(...dp);
    return max;
}
// console.log(maxProduct([2, 3, -2, 4]))
// console.log(maxProduct([-2, 0, -1]))
// console.log(maxProduct([-2, 3, -4]))
console.log(maxProduct([2, -5, -2, -4, 3]));
