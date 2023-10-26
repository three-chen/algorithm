"use strict";
//实际上是求最长公共子序列
function maxUncrossedLines(nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    const dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));
    for (let i = 0; i <= l1; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i <= l2; i++) {
        dp[0][i] = 0;
    }
    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[l1][l2];
}
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]));
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]));
