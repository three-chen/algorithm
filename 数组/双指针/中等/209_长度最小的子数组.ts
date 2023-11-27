function minSubArrayLen(target: number, nums: number[]): number {
  let sum = nums[0]
  let left = 0,
    right = 0
  let min = Infinity
  const l = nums.length
  while (right < l) {
    if (left === right) {
      if (sum >= target) {
        return 1
      } else if (sum < target) {
        right++
        if (right < l) {
          sum = sum + nums[right]
        }
      }
    } else {
      if (sum >= target) {
        if (right - left + 1 < min) {
          min = right - left + 1
        }
        sum = sum - nums[left]
        left++
      } else if (sum < target) {
        right++
        if (right < l) {
          sum = sum + nums[right]
        }
      }
    }
  }
  if (min === Infinity) {
    return 0
  }
  return min
}
