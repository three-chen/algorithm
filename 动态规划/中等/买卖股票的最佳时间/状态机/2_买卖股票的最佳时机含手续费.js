"use strict";
function maxProfit(prices, fee) {
    const l = prices.length;
    const dp = new Array(l).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (let i = 1; i < l; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
    }
    return Math.max(dp[l - 1][0], dp[l - 1][1]);
}
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
