function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const l = nums.length
  let min = Infinity
  for (let i = k - 1; i < l; i++) {
    min = Math.min(nums[i] - nums[i - k + 1], min)
  }
  return min
}
