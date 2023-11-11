function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  const l = nums.length
  let diff = -Infinity
  for (let i = 0; i < l - 2; i++) {
    let left = i + 1
    let right = l - 1
    while (left < right) {
      const h = nums[i] + nums[left] + nums[right]
      const d = target - h
      if (Math.abs(d) < Math.abs(diff)) {
        diff = d
      }
      if (h > target) {
        right--
      } else if (h < target) {
        left++
      } else {
        return target
      }
    }
  }
  return target - diff
}
