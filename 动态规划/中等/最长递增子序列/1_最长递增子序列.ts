function lengthOfLIS(nums: number[]): number {
    const l = nums.length
    const dp = new Array(l).fill(0)
    dp[0] = 1
    for (let i = 1; i < l; i++) {
        let na: number[] = []
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                na.push(dp[j] + 1)
            } else {
                na.push(1)
            }
        }
        dp[i] = Math.max(...na)
    }
    return Math.max(...dp)
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
