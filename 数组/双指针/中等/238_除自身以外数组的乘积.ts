function productExceptSelf(nums: number[]): number[] {
  const result = {
    mul: 1,
    haszero: false,
    zeroIndex: -1
  }
  hasZero(nums, result)
  const res: number[] = []
  const l = nums.length
  console.log(result)

  if (result.haszero) {
    let mul = 1
    for (let i = 0; i < result.zeroIndex; i++) {
      res.push(0)
      mul = mul * nums[i]
    }
    for (let i = result.zeroIndex + 1; i < l; i++) {
      res.push(0)
      mul = mul * nums[i]
    }
    res.splice(result.zeroIndex, 0, mul)
  } else {
    for (let i = 0; i < l; i++) {
      res.push(result.mul / nums[i])
    }
  }
  return res
}

function hasZero(nums: number[], result: any) {
  const l = nums.length
  for (let i = 0; i < l; i++) {
    if (nums[i] === 0) {
      result.haszero = true
      result.zeroIndex = i
      result.mul = 0
      return
    }
    result.mul = result.mul * nums[i]
  }
}

// console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
