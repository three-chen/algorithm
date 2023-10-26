function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => {
    return a[0] - b[0]
  })
  const l = pairs.length
  const dp = new Array(l).fill(0)
  dp[0] = 1
  for (let i = 1; i < l; i++) {
    const arr = []
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        arr.push(dp[j] + 1)
      } else {
        arr.push(1)
      }
    }
    dp[i] = Math.max(...arr)
  }
  return dp[l - 1]
}

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4]
  ])
)
console.log(
  findLongestChain([
    [1, 2],
    [7, 8],
    [4, 5]
  ])
)
