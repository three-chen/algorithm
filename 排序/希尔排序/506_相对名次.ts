function findRelativeRanks(score: number[]): string[] {
  const sorted = shellSort(Object.assign([], score))
  const map = new Map<number, string>()
  const str: string[] = []
  sorted.forEach((value, index) => {
    if (!map.get(value)) {
      switch (index) {
        case 0:
          map.set(value, 'Gold Medal')
          break
        case 1:
          map.set(value, 'Silver Medal')
          break
        case 2:
          map.set(value, 'Bronze Medal')
          break
        default:
          map.set(value, (index + 1).toString())
          break
      }
    }
  })
  score.forEach(value => {
    str.push(map.get(value)!)
  })
  return str
}

function shellSort(nums: number[]): number[] {
  let gap = Math.floor(nums.length / 2)
  let temp = 0,
    i = 0,
    j = 0
  while (gap > 0) {
    for (i = gap; i < nums.length; i++) {
      temp = nums[i]
      for (j = i - gap; j >= 0 && nums[j] < temp; j = j - gap) {
        nums[j + gap] = nums[j]
      }
      nums[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return nums
}

console.log(findRelativeRanks([3, 4, 6, 1, 2, 4, 7]))
console.log(findRelativeRanks([9, 1, 2, 5, 7, 4, 8, 6, 3, 5]))
console.log(findRelativeRanks([1]))
