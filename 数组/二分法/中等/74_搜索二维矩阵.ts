function searchMatrix(matrix: number[][], target: number): boolean {
  const row = matrix.length
  const column = matrix[0].length
  const num = row * column
  let left = 0,
    right = num - 1
  while (left <= right) {
    const base = Math.floor((left + right) / 2)
    let i = Math.floor(base / column)
    let j = base % column
    if (matrix[i][j] === target) {
      return true
    } else if (matrix[i][j] < target) {
      left = base + 1
    } else {
      right = base - 1
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    3
  )
)
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    13
  )
)
