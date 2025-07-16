function findMaxAverage(nums: number[], k: number): number {
  const l = nums.length
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum = sum + nums[i]
  }
  let right = k - 1
  let max = -Infinity
  while (right < l) {
    max = Math.max(sum / k, max)
    sum = sum - nums[right - k + 1] + nums[++right]
  }
  return max
}
