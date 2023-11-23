function jump(nums: number[]): number {
  const l = nums.length
  if (l <= 1) return 0
  const dp = new Array(l).fill(0)
  let min = Infinity
  for (let i = 1; i < l; i++) {
    min = Infinity
    for (let j = i - 1; j >= 0; j--) {
      if (j + nums[j] < i) continue
      if (min > dp[j] + 1) min = dp[j] + 1
    }
    dp[i] = min
  }
  return dp[l - 1]
}

console.log(jump([2, 3, 1, 1, 4]))
