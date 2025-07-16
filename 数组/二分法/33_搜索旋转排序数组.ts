function search(nums: number[], target: number): number {
  const l = nums.length
  let left = 0,
    right = l - 1,
    m = 0
  while (left <= right) {
    m = Math.floor((left + right) / 2)

    if (target === nums[m]) {
      return m
    }
    if (nums[l - 1] > nums[0]) {
      if (nums[m] < target) {
        left = m + 1
      } else {
        right = m - 1
      }
    } else if (nums[l - 1] === nums[0]) {
      return target === nums[0] ? 0 : -1
    } else {
      if (target > nums[m]) {
        if (target > nums[l - 1] && nums[m] < nums[l - 1]) {
          right = m - 1
        } else {
          left = m + 1
        }
      } else if (target < nums[m] && target > nums[l - 1]) {
        right = m - 1
      } else if (target <= nums[l - 1]) {
        if (nums[m] <= nums[l - 1]) {
          right = m - 1
        } else {
          left = m + 1
        }
      }
    }
  }
  return -1
}
