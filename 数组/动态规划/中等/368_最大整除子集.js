"use strict";
function largestDivisibleSubset(nums) {
    nums.sort((a, b) => a - b);
    const l = nums.length;
    const dp = new Array(l).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = -1; // 前一个索引
    dp[0][1] = 1; // 子集个数
    let totalmax = 1, totalIndex = 0;
    for (let i = 1; i < l; i++) {
        let tempmax = 1, tempIndex = -1;
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
                if (dp[j][1] + 1 > tempmax) {
                    tempmax = dp[j][1] + 1;
                    tempIndex = j;
                }
            }
        }
        dp[i][0] = tempIndex;
        dp[i][1] = tempmax;
        if (tempmax > totalmax) {
            totalIndex = i;
            totalmax = tempmax;
        }
    }
    console.log(dp);
    console.log(totalIndex, totalmax);
    const res = [];
    while (totalIndex !== -1) {
        res.push(nums[totalIndex]);
        totalIndex = dp[totalIndex][0];
    }
    return res;
}
console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]));
// console.log(largestDivisibleSubset([1, 2, 3]))
// console.log(largestDivisibleSubset([1, 2, 4, 8]))
