"use strict";
function lengthOfLIS(nums) {
    const l = nums.length;
    const dp = new Array(l).fill(0);
    dp[0] = 1;
    for (let i = 1; i < l; i++) {
        let na = [];
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                na.push(dp[j] + 1);
            }
            else {
                na.push(1);
            }
        }
        dp[i] = Math.max(...na);
    }
    console.log(dp);
    return Math.max(...dp);
}
;
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
