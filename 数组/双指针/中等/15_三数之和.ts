function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => {
    return a - b
  })

  const res: number[][] = []
  const l = nums.length
  for (let i = 0; i < l - 2; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = l - 1
    while (left < right) {
      if (nums[left] + nums[i] + nums[right] === 0) {
        res.push([nums[left], nums[i], nums[right]])
        while (left < right && nums[left + 1] === nums[left]) {
          left++
        }
        while (left < right && nums[right + 1] === nums[right]) {
          right++
        }
        left++
        right--
      } else if (nums[left] + nums[i] + nums[right] > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}
