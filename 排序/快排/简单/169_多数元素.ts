function majorityElement(nums: number[]): number {
  const stack = [[0, nums.length - 1]]
  let res = -Infinity
  while (stack.length > 0) {
    const ele = stack.shift()
    const start = ele![0]
    const end = ele![1]
    if (start >= end) {
      res = nums[start]
      continue
    }
    let left = start
    let right = end
    let base = nums[left]
    let temp = 0
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
    if (left === Math.floor(nums.length / 2)) {
      res = base
      break
    } else if (left < Math.floor(nums.length / 2)) {
      stack.push([left + 1, end])
    } else {
      stack.push([start, left - 1])
    }
  }
  return res
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
