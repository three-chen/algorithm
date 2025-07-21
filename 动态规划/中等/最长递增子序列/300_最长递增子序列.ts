function lengthOfLIS(nums: number[]): number {
  const l = nums.length;
  const dp: number[] = new Array(l).fill(1);
  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
