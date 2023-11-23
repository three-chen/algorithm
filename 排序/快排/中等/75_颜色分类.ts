/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  quickSort(nums, 0, nums.length - 1)
}

function quickSort(nums: number[], start: number, end: number) {
  if (start >= end) {
    return
  }
  let left = start,
    right = end
  const base = nums[left]
  while (left < right) {
    while (left < right && nums[right] >= base) {
      right--
    }
    nums[left] = nums[right]
    while (left < right && nums[left] <= base) {
      left++
    }
    nums[right] = nums[left]
  }
  nums[left] = base
  quickSort(nums, start, left - 1)
  quickSort(nums, left + 1, end)
}
