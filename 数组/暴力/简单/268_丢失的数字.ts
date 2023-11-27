function missingNumber(nums: number[]): number {
  const l = nums.length
  let trueSum = l,
    sum = 0
  let i = 0
  for (i = 0; i < l; i++) {
    trueSum = trueSum + i
    sum = sum + nums[i]
  }
  return trueSum - sum
}
