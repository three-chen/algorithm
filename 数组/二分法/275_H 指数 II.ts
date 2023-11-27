function hIndex(citations: number[]): number {
  const l = citations.length
  let target = 0
  let left = 0,
    right = l - 1
  while (left <= right) {
    const base = Math.floor((left + right) / 2)
    target = l - base
    console.log(base, target, citations[base])

    if (citations[base] === target) {
      return target
    } else if (citations[base] > target) {
      right = base - 1
    } else {
      left = base + 1
    }
  }
  if (left === l) return 0
  if (right === -1) return l
  return l - right - 1
}

console.log(hIndex([0]))
