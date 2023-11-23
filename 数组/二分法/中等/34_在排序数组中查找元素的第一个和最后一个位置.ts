function searchRange(nums: number[], target: number): number[] {
  const l = nums.length
  const res = [-1, -1]
  if (l === 0) return res
  let left = 0,
    right = l - 1
  while (left <= right) {
    const base = Math.floor((right + left) / 2)
    if (nums[base] < target) {
      left = base + 1
    } else {
      right = base - 1
    }
  }
  if (nums[left] !== target) {
    return res
  }
  res[0] = left
  right = l - 1
  while (left <= right) {
    const base = Math.floor((right + left) / 2)
    if (nums[base] > target) {
      right = base - 1
    } else {
      left = base + 1
    }
  }
  res[1] = right
  return res
}
