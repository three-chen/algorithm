function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    let x = String(a),
      y = String(b)

    if (x + y > y + x) {
      return -1
    } else {
      return 1
    }
  })
  if (nums[0] == 0) {
    return '0'
  }
  return nums.join('')
}
console.log(largestNumber([111311, 1113]))
console.log(largestNumber([43243, 432]))
console.log(largestNumber([999999991, 9]))
console.log(largestNumber([9, 999999991]))
