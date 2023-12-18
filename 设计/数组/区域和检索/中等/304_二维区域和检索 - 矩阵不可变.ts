class NumMatrix {
  private matrix: number[][]
  private row: number
  private column: number
  constructor(matrix: number[][]) {
    this.row = matrix.length
    this.column = matrix[0].length
    this.matrix = new Array(this.row).fill(0).map((a, b) => new Array(this.column).fill(0))
    this.matrix[0][0] = matrix[0][0]
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (i === 0 && j === 0) {
        } else if (j === 0) {
          this.matrix[i][j] = this.matrix[i - 1][j] + matrix[i][j]
        } else if (i === 0) {
          this.matrix[i][j] = this.matrix[i][j - 1] + matrix[i][j]
        } else {
          this.matrix[i][j] = this.matrix[i][j - 1] + this.matrix[i - 1][j] + matrix[i][j] - this.matrix[i - 1][j - 1]
        }
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    if (row1 === 0 && col1 === 0) return this.matrix[row2][col2]
    if (row1 === 0) return this.matrix[row2][col2] - this.matrix[row2][col1 - 1]
    if (col1 === 0) return this.matrix[row2][col2] - this.matrix[row1 - 1][col2]
    return this.matrix[row2][col2] - this.matrix[row2][col1 - 1] - this.matrix[row1 - 1][col2] + this.matrix[row1 - 1][col1 - 1]
  }
}

// Your NumMatrix object will be instantiated and called as such:
var obj = new NumMatrix([[-4, -5]])
var param_1 = obj.sumRegion(0, 0, 0, 0)
var param_1 = obj.sumRegion(0, 0, 0, 1)
