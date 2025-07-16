function countGoodSubstrings(s: string): number {
  const l = s.length
  let count = 0
  for (let i = 2; i < l; i++) {
    if (s[i - 2] !== s[i - 1] && s[i - 1] !== s[i] && s[i - 2] !== s[i]) count++
  }
  return count
}
