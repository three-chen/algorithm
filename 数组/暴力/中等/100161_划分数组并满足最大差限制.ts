function divideArray(nums: number[], k: number): number[][] {
  const l = nums.length
  nums.sort((a, b) => a - b)
  console.log(nums)

  for (let i = 0; i < l; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return []
    }
  }
  let arr = []
  for (let i = 0; i < l; i += 3) {
    console.log(nums.slice(i, i + 3))

    arr.push(nums.slice(i, i + 3))
  }
  return arr
}

console.log(divideArray([33, 26, 4, 18, 16, 24, 24, 15, 8, 18, 34, 20, 24, 16, 3], 16))
