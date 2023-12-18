function singleNumber(nums: number[]): number {
  let res: number = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}
