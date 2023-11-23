/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const row = matrix.length
  const column = matrix[0].length
  let flag_row = false,
    flag_column = false
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      flag_column = true
      break
    }
  }
  for (let i = 0; i < column; i++) {
    if (matrix[0][i] === 0) {
      flag_row = true
      break
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (flag_column === true) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0
    }
  }
  if (flag_row === true) {
    for (let i = 0; i < column; i++) {
      matrix[0][i] = 0
    }
  }
}
