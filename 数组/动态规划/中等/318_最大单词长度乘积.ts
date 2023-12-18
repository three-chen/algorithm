function maxProduct(words: string[]): number {
  const l = words.length
  const dp = new Array(l).fill(0)
  dp[0] = 0
  const mask = new Array(l).fill(0)
  for (let i = 0; i < l; i++) {
    const el = words[i]
    for (let j = 0; j < el.length; j++) {
      const char = el[j]
      mask[i] |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0))
    }
  }
  for (let i = 1; i < l; i++) {
    let max = dp[i - 1]
    for (let j = 0; j < i; j++) {
      if ((mask[i] & mask[j]) === 0) {
        if (words[j].length * words[i].length > max) {
          max = words[j].length * words[i].length
        }
      }
    }
    dp[i] = max
  }
  return dp[l - 1]
}

// function hasSameChar(a: string, b: string): boolean {
//   for (let i = 0; i < a.length; i++) {
//     const char = a[i]
//     if (b.indexOf(char) !== -1) {
//       return true
//     }
//   }
//   return false
// }

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']))
