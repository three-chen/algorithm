function subarraySum(nums: number[], k: number): number {
  const l = nums.length
  let sums = 0
  let res = 0
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  for (let i = 0; i < l; i++) {
    sums = sums + nums[i]
    const el = map.get(sums - k)
    if (el !== undefined) {
      res = res + el
    }
    if (map.get(sums)) {
      map.set(sums, map.get(sums)! + 1)
    } else {
      map.set(sums, 1)
    }
  }
  return res
}
