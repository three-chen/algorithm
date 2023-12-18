function subarraysDivByK(nums: number[], k: number): number {
  const l = nums.length
  const sums = new Array(l + 1).fill(0)
  for (let i = 1; i <= l; i++) {
    sums[i] = sums[i - 1] + nums[i - 1]
  }
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  let res = 0
  for (let i = 1; i <= l; i++) {
    let remainder = sums[i] % k
    remainder = remainder > 0 ? remainder : remainder + k
    const el = map.get(remainder)
    if (el !== undefined) {
      res += el
      map.set(remainder, el + 1)
    } else {
      map.set(remainder, 1)
    }
  }
  return res
}
