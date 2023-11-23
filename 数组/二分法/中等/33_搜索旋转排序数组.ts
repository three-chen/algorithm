function search(nums: number[], target: number): number {
  const l = nums.length
  const res = s(nums, 0, l - 1, target)
  return res
}
function s(nums: number[], start: number, end: number, target: number): number {
  if (start > end) return -1
  if (start === end) return nums[start] === target ? start : -1

  const middle = Math.floor((end + start) / 2)
  let left = -1,
    right = -1
  if (nums[middle] === target) {
    return middle
  } else {
    left = s(nums, start, middle - 1, target)
    right = s(nums, middle + 1, end, target)
  }
  return left === -1 ? right : left
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([1], 0))
console.log(search([3, 1], 3))
console.log(search([5, 1, 3], 5))
