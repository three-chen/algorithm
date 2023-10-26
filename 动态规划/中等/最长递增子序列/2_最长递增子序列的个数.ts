function findNumberOfLIS(nums: number[]): number {
    const l = nums.length
    let max = 0
    let n = 0
    let cnt = new Array(l).fill(0);
    const dp = new Array(l).fill(0)
    for (let i = 0; i < l; i++) {
        dp[i] = 1;
        cnt[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j]; // 重置计数
                } else if (dp[j] + 1 === dp[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }
        if (dp[i] > max) {
            max = dp[i];
            n = cnt[i]; // 重置计数
        } else if (dp[i] === max) {
            n += cnt[i];
        }
    }

    return n
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]));
