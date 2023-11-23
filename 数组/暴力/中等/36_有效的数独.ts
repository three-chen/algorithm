function isValidSudoku(board: string[][]): boolean {
  const row = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const column = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const block = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const el = board[i][j]
      if (el !== '.') {
        const e = Number(el) - 1
        row[i][e]++
        column[j][e]++
        block[Math.floor(i / 3)][Math.floor(j / 3)][e]++
        if (row[i][e] > 1 || column[j][e] > 1 || block[Math.floor(i / 3)][Math.floor(j / 3)][e] > 1) {
          return false
        }
      }
    }
  }
  return true
}
