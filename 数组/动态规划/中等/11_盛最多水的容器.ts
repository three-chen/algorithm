function maxArea(height: number[]): number {
  const l = height.length
  const dp = new Array(l).fill(0)

  for (let j = 1; j < l; j++) {
    let max = 0
    const hj = height[j]
    for (let i = 0; i < j; i++) {
      // V i j
      const h = Math.min(height[i], hj)
      const v = h * (j - i)
      if (v > max) {
        max = v
      }
    }
    dp[j] = Math.max(dp[j - 1], max)
  }
  return dp[l - 1]
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
// 超时 题解采用双指针
