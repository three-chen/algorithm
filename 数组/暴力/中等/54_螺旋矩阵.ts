function spiralOrder(matrix: number[][]): number[] {
  const row = matrix.length
  const column = matrix[0].length
  const times = Math.floor((Math.min(row, column) + 1) / 2)
  const res: number[] = []

  let i = 0,
    j = 0
  for (let t = 0; t < times; t++) {
    i = t
    j = t
    if (t === row - t - 1) {
      while (j < column - t) {
        res.push(matrix[i][j])
        j++
      }
    } else if (t === column - t - 1) {
      while (i < row - t) {
        res.push(matrix[i][j])
        i++
      }
    } else {
      while (j < column - t - 1) {
        res.push(matrix[i][j])
        j++
      }
      while (i < row - t - 1) {
        res.push(matrix[i][j])
        i++
      }
      while (j > t) {
        res.push(matrix[i][j])
        j--
      }
      while (i > t) {
        res.push(matrix[i][j])
        i--
      }
    }
  }
  return res
}

console.log(spiralOrder([[6, 9, 7]]))
