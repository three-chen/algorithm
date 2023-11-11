function findKthLargest(nums: number[], k: number): number {
  const stack = [[0, nums.length - 1]]
  let res = 0
  while (stack.length > 0) {
    const arr = stack.shift()
    const start = arr![0]
    const end = arr![1]
    if (start >= end) {
      res = nums[start]
      continue
    }
    let left = start
    let right = end
    const base = nums[start]
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

    if (end - left >= k) {
      stack.push([left + 1, end])
    } else if (end - left + 1 === k) {
      return nums[left]
    } else {
      k = k - (end - left + 1)
      stack.push([start, left - 1])
    }
  }
  return res
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
