function permute(nums: number[]): number[][] {
  const res: number[][] = []
  quanPaiLie(nums, res, [])
  return res
}

function quanPaiLie(nums: number[], res: number[][], curPaiLie: number[]) {
  if (nums.length === 0) {
    let newA: number[] = []
    newA = Object.assign(newA, curPaiLie)
    res.push(newA)
    return
  }
  nums.forEach((value, index, array) => {
    let newArr: number[] = []
    newArr = Object.assign(newArr, array)
    newArr.splice(index, 1)
    curPaiLie.push(value)
    quanPaiLie(newArr, res, curPaiLie)
    curPaiLie.pop()
  })
}

console.log(permute([1, 2, 3]))
console.log(permute([1]))
