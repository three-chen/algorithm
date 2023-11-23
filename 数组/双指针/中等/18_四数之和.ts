function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)
  const l = nums.length
  if (l < 4) {
    return []
  }
  const res: number[][] = []
  for (let i = 0; i < l - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < l - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let left = j + 1
      let right = l - 1
      while (left < right) {
        const t = nums[i] + nums[j] + nums[left] + nums[right]
        if (t === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          left++
          right--
        } else if (t > target) {
          right--
        } else {
          left++
        }
      }
    }
  }
  return res
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// console.log(fourSum([2, 2, 2, 2, 2], 8))
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0))
// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11))
// console.log(fourSum([-1, -5, -5, -3, 2, 5, 0, 4], -7))
