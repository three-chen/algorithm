function xorQueries(arr: number[], queries: number[][]): number[] {
  const l = arr.length
  const sums = new Array(l + 1).fill(0)
  sums[0] = 0
  for (let i = 1; i <= l; i++) {
    sums[i] = sums[i - 1] ^ arr[i - 1]
  }
  const len = queries.length
  const res: number[] = []
  for (let i = 0; i < len; i++) {
    const [left, right] = queries[i]
    res.push(sums[right + 1] ^ sums[left])
  }
  return res
}
