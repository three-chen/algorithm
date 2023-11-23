function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const res: number[][] = []
  quanPaiLie(nums, res, [])
  return res
}

function quanPaiLie(nums: number[], res: number[][], curLi: number[]) {
  if (nums.length === 0) {
    let newA: number[] = []
    newA = Object.assign(newA, curLi)
    res.push(newA)
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let newArr: number[] = []
    newArr = Object.assign(newArr, nums)
    newArr.splice(i, 1)
    curLi.push(nums[i])
    // console.log(nums, newArr, curLi)

    quanPaiLie(newArr, res, curLi)
    curLi.pop()
  }
}

console.log(permuteUnique([1, 1, 2]))
// console.log(permuteUnique([1, 2, 3]))
