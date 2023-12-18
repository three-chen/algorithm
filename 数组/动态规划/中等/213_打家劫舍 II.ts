function rob(nums: number[]): number {
  const l = nums.length
  if (l === 1) return nums[0]
  const dp = new Array(l).fill(0).map(() => new Array(4).fill(0))
  dp[0][0] = 0
  dp[0][1] = nums[0]
  dp[0][2] = 0
  dp[0][3] = nums[0]
  dp[1][0] = 0
  dp[1][1] = nums[0]
  dp[1][2] = nums[1]
  dp[1][3] = nums[0]
  for (let i = 2; i < l; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
    dp[i][2] = dp[i - 1][0] + nums[i]
    if (i === l - 1) {
      dp[i][3] = -Infinity
    } else {
      dp[i][3] = dp[i - 1][1] + nums[i]
    }
  }
  return Math.max(...dp[l - 1])
}
