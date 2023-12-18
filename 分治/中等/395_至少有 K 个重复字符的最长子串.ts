function longestSubstring(s: string, k: number): number {
  const l = s.length
  if (l < k) return 0
  const counter: Map<string, number> = new Map()
  for (let i = 0; i < l; i++) {
    if (counter.get(s[i]) === undefined) {
      counter.set(s[i], 1)
    } else {
      counter.set(s[i], counter.get(s[i])! + 1)
    }
  }

  const split: string[] = []
  for (const [key, value] of counter) {
    if (value < k) {
      while (s) {
        const index = s.indexOf(key)
        if (index !== -1) {
          split.push(s.substring(0, index))
          s = s.substring(index + 1)
        } else {
          split.push(s)
          s = ''
        }
      }
    }
  }
  if (split.length === 0) {
    return s.length
  }
  let max = 0
  for (const value of split) {
    max = Math.max(longestSubstring(value, k), max)
  }
  return max
}

console.log(longestSubstring('aaaaaaaaaaaabcdefghijklmnopqrstuvwzyz', 3))
