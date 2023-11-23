function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]]
  backTrace(nums, res, [])
  return res
}

function backTrace(nums: number[], res: number[][], curLi: number[]) {
  if (curLi.length > 0) {
    let newLi: number[] = []
    newLi = Object.assign(newLi, curLi)
    res.push(newLi)
  }
  if (nums.length < 1) {
    return
  }
  nums.forEach((value, index, array) => {
    curLi.push(value)
    let nLi: number[] = []
    nLi = Object.assign(nLi, array)
    nLi.splice(0, index + 1)
    backTrace(nLi, res, curLi)
    curLi.pop()
  })
}
