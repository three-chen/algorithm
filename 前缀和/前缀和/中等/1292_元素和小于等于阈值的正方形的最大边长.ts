function maxSideLength(mat: number[][], threshold: number): number {
  const row = mat.length
  const column = mat[0].length
  const sums = new Array(row + 1).fill(0).map(() => new Array(column + 1).fill(0))
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      sums[i][j] = sums[i - 1][j] + sums[i][j - 1] + mat[i - 1][j - 1] - sums[i - 1][j - 1]
    }
  }

  const side = Math.min(row, column)
  console.log(sums, side)
  let max = 0
  // 待二分优化
  for (let s = 0; s < side; s++) {
    console.log('s=', s)

    for (let i = 0; i < row - s; i++) {
      for (let j = 0; j < column - s; j++) {
        console.log(sums[i + s + 1][j + s + 1] - sums[i][j + s + 1] - sums[i + s + 1][j] + sums[i][j])

        if (sums[i + s + 1][j + s + 1] - sums[i][j + s + 1] - sums[i + s + 1][j] + sums[i][j] <= threshold) {
          max = s + 1
          break
        }
      }
      if (max === s + 1) break
    }
  }
  return max
}

console.log(
  maxSideLength(
    [
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2],
      [1, 1, 3, 2, 4, 3, 2]
    ],
    4
  )
)
