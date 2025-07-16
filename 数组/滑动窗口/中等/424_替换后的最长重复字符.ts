function characterReplacement(s: string, k: number): number {
  const l = s.length
  const arr = new Array(26).fill(0)
  let maxnum = 0
  let left = 0,
    right = 0
  let res = 0
  while (right < l) {
    arr[s.charCodeAt(right) - 'A'.charCodeAt(0)]++
    maxnum = Math.max(...arr)
    while (right - left + 1 - maxnum > k) {
      res = Math.max(right - left, res)
      arr[s.charCodeAt(left) - 'A'.charCodeAt(0)]--
      maxnum = Math.max(...arr)
      left++
    }
    right++
  }
  res = Math.max(right - left, res)
  return res
}
