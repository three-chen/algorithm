function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0
  const mymap: any = {}
  nums.forEach(value => {
    mymap[value] = value
  })
  let maxGap = 0,
    lastValue = Infinity
  let value: number = 0
  for (const key in mymap) {
    value = mymap[key]
    if (value - lastValue > maxGap) {
      maxGap = value - lastValue
    }
    lastValue = value
  }
  return maxGap
}

console.log(maximumGap([100, 3, 2, 1]))
