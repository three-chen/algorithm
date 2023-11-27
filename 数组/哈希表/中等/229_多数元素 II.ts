function majorityElement(nums: number[]): number[] {
  const l = nums.length
  const map: any = {}
  const target = l / 3
  const res: number[] = []
  for (let i = 0; i < l; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
    if (map[nums[i]] > target) {
      res.push(nums[i])
      map[nums[i]] = -Infinity
    }
  }
  return res
}
