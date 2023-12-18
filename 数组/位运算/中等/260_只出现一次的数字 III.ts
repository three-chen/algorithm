function singleNumber(nums: number[]): number[] {
  const l = nums.length
  let xor = 0
  for (let i = 0; i < l; i++) {
    xor ^= nums[i]
  }
  let res1 = 0,
    res2 = 0
  const lsb = xor & -xor
  for (let i = 0; i < l; i++) {
    if (nums[i] & lsb) {
      res1 ^= nums[i]
    } else {
      res2 ^= nums[i]
    }
  }
  return [res1, res2]
}
