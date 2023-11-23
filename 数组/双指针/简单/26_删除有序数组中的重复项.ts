function removeDuplicates(nums: number[]): number {
  const l = nums.length
  if (l === 1) return 1
  if (l === 2) {
    if (nums[1] === nums[0]) return 1
    return 2
  }
  let real = 0
  let left = 0
  let right = 1
  while (right < l) {
    if (nums[right] === nums[left]) {
      right++
    } else {
      nums[real] = nums[left]
      real++
      left = right
      right++
    }
  }
  nums[real] = nums[left]
  real++
  return real
}

console.log(removeDuplicates([1, 1, 1]))
console.log(removeDuplicates([1, 2, 2]))
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
