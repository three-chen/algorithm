function findPeakElement(nums: number[]): number {
  const l = nums.length
  if (l === 1) return 0
  let left = 0,
    right = l - 1
  let res = -1
  while (left <= right) {
    const base = Math.floor((left + right) / 2)
    if (base - 1 >= 0 && base + 1 < l) {
      if (nums[base] > nums[base + 1] && nums[base] > nums[base - 1]) {
        res = base
        break
      } else if (nums[base] < nums[base + 1]) {
        left = base + 1
      } else {
        right = base - 1
      }
    } else if (base + 1 >= l) {
      if (nums[base] > nums[base - 1]) {
        res = base
        break
      } else {
        right = base - 1
      }
    } else {
      if (nums[base] > nums[base + 1]) {
        res = base
        break
      } else {
        left = base + 1
      }
    }
  }
  return res
}
