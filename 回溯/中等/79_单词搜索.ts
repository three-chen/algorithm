function exist(board: string[][], word: string): boolean {
  const row = board.length
  const column = board[0].length
  const flagObj = { flag: false }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === word[0]) {
        board[i][j] = ''
        backTrace(board, word, row, column, i, j, 1, flagObj)
        if (flagObj.flag) {
          return true
        }
        board[i][j] = word[0]
      }
    }
  }
  return false
}

function backTrace(board: string[][], word: string, row: number, column: number, curRow: number, curColumn: number, depth: number, flagObj: any) {
  if (depth >= word.length) {
    flagObj.flag = true
    return
  }
  const shang = [curRow - 1, curColumn]
  const xia = [curRow + 1, curColumn]
  const zuo = [curRow, curColumn - 1]
  const you = [curRow, curColumn + 1]
  if (shang[0] >= 0 && board[shang[0]][shang[1]] === word[depth]) {
    board[shang[0]][shang[1]] = ''
    backTrace(board, word, row, column, curRow - 1, curColumn, depth + 1, flagObj)
    board[shang[0]][shang[1]] = word[depth]
  }
  if (xia[0] < row && board[xia[0]][xia[1]] === word[depth]) {
    board[xia[0]][xia[1]] = ''
    backTrace(board, word, row, column, curRow + 1, curColumn, depth + 1, flagObj)
    board[xia[0]][xia[1]] = word[depth]
  }
  if (zuo[1] >= 0 && board[zuo[0]][zuo[1]] === word[depth]) {
    board[zuo[0]][zuo[1]] = ''
    backTrace(board, word, row, column, curRow, curColumn - 1, depth + 1, flagObj)
    board[zuo[0]][zuo[1]] = word[depth]
  }
  if (you[1] < column && board[you[0]][you[1]] === word[depth]) {
    board[you[0]][you[1]] = ''
    backTrace(board, word, row, column, curRow, curColumn + 1, depth + 1, flagObj)
    board[you[0]][you[1]] = word[depth]
  }
}
