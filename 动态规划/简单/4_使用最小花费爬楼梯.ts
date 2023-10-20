function minCostClimbingStairs(cost: number[]): number {
    const l = cost.length - 1;
    if (l === 0) {
        return cost[0]
    }
    if (l === 1) {
        return Math.min(cost[0], cost[1])
    }
    const dp = [cost[0], cost[1]]
    for (let index = 2; index <= l; index++) {
        dp[index] = Math.min(dp[index - 1] + cost[index], dp[index - 2] + cost[index]);
    }

    return Math.min(dp[l], dp[l - 1])
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
