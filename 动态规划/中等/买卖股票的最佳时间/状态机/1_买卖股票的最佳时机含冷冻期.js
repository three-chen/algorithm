"use strict";
function maxProfit(prices) {
    const l = prices.length;
    const dp = new Array(l).fill(0).map(() => new Array(3).fill(0));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    dp[0][2] = 0;
    for (let i = 1; i < l; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        dp[i][1] = dp[i - 1][0] + prices[i];
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    }
    return Math.max(...dp[l - 1]);
}
console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1]));
