function rob(nums: number[]): number {
    let l = nums.length - 1
    if (l === 0) {
        return nums[0];
    }
    if (l === 1) {
        return Math.max(nums[0], nums[1]);
    }
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i <= l; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[l]
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
