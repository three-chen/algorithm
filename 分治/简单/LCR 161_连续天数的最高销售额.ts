function maxSales(sales: number[]): number {
  const l = sales.length
  const dp = new Array(l).fill(0)
  dp[0] = sales[0]
  let max = dp[0]
  for (let i = 1; i < l; i++) {
    dp[i] = Math.max(dp[i - 1] + sales[i], sales[i])
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
}
