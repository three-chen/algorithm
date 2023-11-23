function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const res: number[][] = []
  backTracing(candidates, target, res, 0, candidates.length - 1, [], 0)
  return res
}

function backTracing(candidates: number[], target: number, res: number[][], start: number, end: number, curLi: number[], curSum: number) {
  if (curSum === target) {
    let newLi: number[] = []
    newLi = Object.assign(newLi, curLi)
    res.push(newLi)
    return
  } else if (curSum > target) {
    return
  }
  for (let i = start; i <= end; i++) {
    const num = candidates[i]
    if (num > target) {
      break
    }
    curLi.push(num)
    curSum += num

    backTracing(candidates, target, res, i, end, curLi, curSum)
    curLi.pop()
    curSum -= num
  }
}

console.log(combinationSum([2, 3, 8, 4], 6))
console.log(combinationSum([2, 3, 6, 7], 7))
