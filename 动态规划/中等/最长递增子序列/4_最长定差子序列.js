"use strict";
function longestSubsequence(arr, difference) {
    const l = arr.length;
    const dp = new Array(l).fill(0);
    dp[0] = 1;
    for (let i = 1; i < l; i++) {
        const a = [];
        for (let j = 0; j < i; j++) {
            if (arr[i] - difference === arr[j]) {
                a.push(dp[j] + 1);
            }
            else {
                a.push(1);
            }
        }
        dp[i] = Math.max(...a);
    }
    return Math.max(...dp);
}
console.log(longestSubsequence([1, 2, 3, 4], 1));
console.log(longestSubsequence([1, 3, 5, 7], 1));
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2));
console.log(longestSubsequence([3, 4, -3, -2, -4], -5));
