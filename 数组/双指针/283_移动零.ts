/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const l = nums.length
  let left = 0,
    right = 0
  while (right < l) {
    if (nums[right] !== 0) {
      nums[left] = nums[right]
      left++
    }
    right++
  }
  while (left < l) {
    nums[left] = 0
    left++
  }
}
