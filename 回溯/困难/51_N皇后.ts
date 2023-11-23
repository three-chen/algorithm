function solveNQueens(n: number): string[][] {
  const res: string[][] = []
  backTrack(n, 0, 0, res)
  return res
}

function backTrack(n: number, row: number, column: number, res: string[][]) {}
