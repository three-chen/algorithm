function removeDuplicates(nums: number[]): number {
  const l = nums.length
  if (l === 0) return 0
  if (l === 1) return 1
  let left = 0
  let right = 0
  let exists = 0
  let base = 0
  while (right < l) {
    base = nums[right]
    while (base === nums[right]) {
      exists++
      right++
    }
    if (exists >= 2) {
      nums[left] = nums[right - 1]
      nums[left + 1] = nums[right - 1]
      left = left + 2
    } else if (exists === 1) {
      nums[left] = nums[right - 1]
      left = left + 1
    }
    exists = 0
  }
  if (exists >= 2) {
    nums[left] = nums[right - 1]
    nums[left + 1] = nums[right - 1]
    left = left + 2
  } else if (exists === 1) {
    nums[left] = nums[right - 1]
    left = left + 1
  }
  return left
}
