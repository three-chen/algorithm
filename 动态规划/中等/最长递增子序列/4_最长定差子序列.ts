function longestSubsequence(arr: number[], difference: number): number {
  const l = arr.length
  const dp = new Array(l).fill(0)
  dp[0] = 1
  let res = 1
  for (let i = 1; i < l; i++) {
    let max = 1
    for (let j = 0; j < i; j++) {
      if (arr[i] - difference === arr[j]) {
        if (dp[j] + 1 > max) {
          max = dp[j] + 1
        }
      }
    }
    dp[i] = max
    if (dp[i] > res) {
      res = dp[i]
    }
  }
  return res
}

console.log(longestSubsequence([1, 2, 3, 4], 1))
console.log(longestSubsequence([1, 3, 5, 7], 1))
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2))
console.log(longestSubsequence([3, 4, -3, -2, -4], -5))
