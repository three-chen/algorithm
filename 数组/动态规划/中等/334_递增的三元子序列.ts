// function increasingTriplet(nums: number[]): boolean {
//   const l = nums.length
//   const dp = new Array(l).fill(0)
//   dp[0] = 1
//   let max: number
//   for (let i = 1; i < l; i++) {
//     max = 1
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         if (dp[j] + 1 > max) {
//           max = dp[j] + 1
//         }
//       }
//     }
//     dp[i] = max
//     if (max > 2) {
//       return true
//     }
//   }
//   return false
// }
function increasingTriplet(nums: number[]): boolean {
  const l = nums.length
  if (l < 3) return false
  const leftMin = new Array(l).fill(0)
  const rightMax = new Array(l).fill(0)
  leftMin[0] = nums[0]
  for (let i = 1; i < l; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }
  rightMax[l - 1] = nums[l - 1]
  for (let i = l - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i])
  }

  console.log(leftMin)
  console.log(rightMax)

  for (let i = 1; i < l - 1; i++) {
    console.log(nums[i], leftMin[i], rightMax[i])

    if (nums[i] > leftMin[i] && nums[i] < rightMax[i]) {
      return true
    }
  }
  return false
}

console.log(increasingTriplet([1, 2, 3, 4, 5]))
