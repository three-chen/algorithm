class NumArray {
  private nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  sumRange(left: number, right: number): number {
    // if (left < 0 || right >= this.nums.length) {
    //   return new Error('out of Range')
    // }

    let sum = 0
    for (let i = left; i <= right; i++) {
      sum += this.nums[i]
      console.log(this.nums[i])
    }
    return sum
  }
}

// Your NumArray object will be instantiated and called as such:
var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(0, 2)
console.log(param_1)
