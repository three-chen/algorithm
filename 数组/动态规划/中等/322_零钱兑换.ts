function coinChange(coins: number[], amount: number): number {
  const l = coins.length
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    let min = Infinity
    for (let j = 0; j < l; j++) {
      if (i - coins[j] >= 0) {
        if (dp[i - coins[j]] + 1 < min) {
          min = dp[i - coins[j]] + 1
        }
      }
    }
    dp[i] = min
  }
  if (dp[amount] === Infinity) return -1
  return dp[amount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
