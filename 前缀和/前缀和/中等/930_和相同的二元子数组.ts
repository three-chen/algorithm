function numSubarraysWithSum(nums: number[], goal: number): number {
  const l = nums.length
  const sums = new Array(l + 1).fill(0)
  for (let i = 1; i <= l; i++) {
    sums[i] = sums[i - 1] + nums[i - 1]
  }

  const map: Map<number, number> = new Map()
  map.set(0, 1)
  let res = 0
  for (let i = 1; i <= l; i++) {
    const el = map.get(sums[i] - goal)
    if (el !== undefined) {
      res += el
    }
    if (map.get(sums[i])) {
      map.set(sums[i], map.get(sums[i])! + 1)
    } else {
      map.set(sums[i], 1)
    }
  }
  return res
}
