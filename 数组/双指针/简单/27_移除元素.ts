function removeElement(nums: number[], val: number): number {
  const l = nums.length
  if (l === 1) return nums[0] === val ? 0 : 1
  let left = 0,
    right = 0
  while (right < l) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
      right++
    } else {
      right++
    }
  }
  return left
}
