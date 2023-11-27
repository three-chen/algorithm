function twoSum(numbers: number[], target: number): number[] {
  const l = numbers.length
  const index = erfen(numbers, target / 2, 0, l - 1)
  let left = index - 1,
    right = index
  const res: number[] = []
  while (left >= 0 && right < l) {
    if (numbers[left] + numbers[right] === target) {
      res.push(left + 1, right + 1)
      break
    } else if (numbers[left] + numbers[right] < target) {
      right++
    } else {
      left--
    }
  }
  return res
}

function erfen(numbers: number[], target: number, start: number, end: number): number {
  let left = start,
    right = end
  while (left <= right) {
    let base = Math.floor((left + right) / 2)
    if (numbers[base] === target) {
      const l = numbers.length
      while (base + 1 < l && numbers[base + 1] === numbers[base]) {
        base = base + 1
      }
      return base
    } else if (numbers[base] > target) {
      right = base - 1
    } else {
      left = base + 1
    }
  }
  return left
}

console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8))
