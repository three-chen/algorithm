function generateMatrix(n: number): number[][] {
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let num = 1
  const level = Math.floor((n + 1) / 2)
  let i = 0,
    j = 0
  for (let t = 0; t < level; t++) {
    i = t
    j = t
    if (t === n - t - 1) {
      res[i][j] = num
      num++
    } else {
      while (j < n - t - 1) {
        res[i][j] = num
        num++
        j++
      }
      while (i < n - t - 1) {
        res[i][j] = num
        num++
        i++
      }
      while (j > t) {
        res[i][j] = num
        num++
        j--
      }
      while (i > t) {
        res[i][j] = num
        num++
        i--
      }
    }
  }
  return res
}
