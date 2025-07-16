/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const l = nums.length
  if (l === 1) return
  let left = l - 2,
    right = l - 1
  while (left >= 0) {
    if (nums[left] < nums[right]) {
      break
    } else {
      left--
      right--
    }
  }
  if (left === -1) {
    nums.reverse()
    return
  }
  let rightMin = right
  right++
  while (right < l) {
    if (nums[right] > nums[left] && nums[right] <= nums[rightMin]) {
      rightMin = right
    }
    right++
  }
  let temp = nums[left]
  nums[left] = nums[rightMin]
  nums[rightMin] = temp
  left = left + 1
  right = l - 1
  while (left < right) {
    temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }
}
