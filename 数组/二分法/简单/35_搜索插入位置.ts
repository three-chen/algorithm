function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const base = Math.floor((right + left) / 2)
    if (nums[base] === target) {
      return base
    } else if (nums[base] > target) {
      right = base - 1
    } else {
      left = base + 1
    }
  }
  return left
}
