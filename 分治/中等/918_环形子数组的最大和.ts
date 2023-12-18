function maxSubarraySumCircular(nums: number[]): number {
  const l = nums.length
  const sum = nums.reduce((a, b) => a + b)
  const dpMax = new Array(l).fill(0)
  dpMax[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < l; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] + nums[i], nums[i])
    if (dpMax[i] > max) max = dpMax[i]
    console.log(max)
  }
  const dpMin = new Array(l).fill(0)
  dpMin[l - 1] = nums[l - 1]
  for (let i = l - 2; i >= 0; i--) {
    dpMin[i] = Math.min(dpMin[i + 1] + nums[i], nums[i])
    if (sum - dpMin[i + 1] > max) max = sum - dpMin[i + 1]
    console.log(max)
  }

  console.log(dpMax)
  console.log(dpMin)

  return max
}

console.log(maxSubarraySumCircular([-3, -2, -3]))
