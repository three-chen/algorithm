function matrixBlockSum(mat: number[][], k: number): number[][] {
  const row = mat.length
  const column = mat[0].length
  const sums = new Array(row + 1).fill(0).map(() => new Array(column + 1).fill(0))
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      sums[i][j] = sums[i - 1][j] + sums[i][j - 1] + mat[i - 1][j - 1] - sums[i - 1][j - 1]
    }
  }

  const ans = new Array(row).fill(0).map(() => new Array(column).fill(0))
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const leftRow = i - k > 0 ? i - k : 0
      const leftColumn = j - k > 0 ? j - k : 0
      const rightRow = i + k < row ? i + k : row - 1
      const rightColumn = j + k < column ? j + k : column - 1
      ans[i][j] = sums[rightRow + 1][rightColumn + 1] - sums[rightRow + 1][leftColumn] - sums[leftRow][rightColumn + 1] + sums[leftRow][leftColumn]
    }
  }
  return ans
}
