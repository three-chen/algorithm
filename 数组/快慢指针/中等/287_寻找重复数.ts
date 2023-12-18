function findDuplicate(nums: number[]): number {
  const l = nums.length
  let slow = 0,
    fast = 0,
    ptr = 0
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  while (slow !== ptr) {
    ptr = nums[ptr]
    slow = nums[slow]
  }
  return ptr
}
