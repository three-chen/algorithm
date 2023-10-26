function longestCommonSubsequence(text1: string, text2: string): number {
  const l1 = text1.length
  const l2 = text2.length
  const dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0))
  for (let i = 0; i <= l1; i++) {
    dp[i][0] = 0
  }
  for (let i = 0; i <= l2; i++) {
    dp[0][i] = 0
  }
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[l1][l2]
}

console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abc', 'abc'))
console.log(longestCommonSubsequence('abc', 'def'))
