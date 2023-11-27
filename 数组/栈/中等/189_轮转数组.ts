/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const l = nums.length
  k = k % l
  const stack = nums.splice(-k)
  nums.splice(0, 0, ...stack)
}
