function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  let maxProfit: number = 0
  const tasks = difficulty.map((d, index) => [d, profit[index]]).sort((a, b) => a[0] - b[0])
  for (let i = 1; i < tasks.length; i++) {
    tasks[i][1] = Math.max(tasks[i][1], tasks[i - 1][1])
  }
  worker.sort((a, b) => a - b)

  let best = 0,
    right = 0
  const l = worker.length
  while (right < l) {
    best = 0
    let a = 0,
      b = tasks.length - 1,
      m = 0
    while (a <= b) {
      m = Math.floor((a + b) / 2)
      if (tasks[m][0] <= worker[right]) {
        a = m + 1
      } else {
        b = m - 1
      }
    }
    if (b >= 0) {
      maxProfit += tasks[a - 1]?.[1] || 0
    }
    right++
  }

  return maxProfit
}
