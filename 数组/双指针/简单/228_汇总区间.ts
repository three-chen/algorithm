function summaryRanges(nums: number[]): string[] {
  const l = nums.length
  if (l === 1) return [String(nums[0])]
  let left = 0,
    right = 1
  const res: string[] = []
  while (right < l) {
    while (nums[right] === nums[right - 1] + 1 && right < l) {
      right++
    }
    if (right === left + 1) {
      res.push(String(nums[left]))
    } else {
      res.push(String(nums[left]) + '->' + String(nums[right - 1]))
    }
    left = right++
  }
  if (left === l - 1) {
    res.push(String(nums[left]))
  }
  return res
}
