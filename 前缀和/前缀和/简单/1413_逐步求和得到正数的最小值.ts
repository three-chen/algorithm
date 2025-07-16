function minStartValue(nums: number[]): number {
  const l = nums.length
  let sums = nums[0]
  let min = sums
  for (let i = 1; i < l; i++) {
    sums = sums + nums[i]
    min = Math.min(min, sums)
  }
  if (min > 0) return 1
  return 1 - min
}
