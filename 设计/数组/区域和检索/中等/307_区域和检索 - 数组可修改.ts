class NumArray {
  private nums: number[]
  private sums: number[]
  constructor(nums: number[]) {
    this.nums = nums
    this.sums = new Array(nums.length).fill(0)
    this.sums[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.sums[i] = this.sums[i - 1] + nums[i]
    }
  }

  update(index: number, val: number): void {
    if (index >= 0 && index <= this.nums.length) {
      const discrepancy = val - this.nums[index]
      this.nums[index] = val
      for (let i = index; i < this.nums.length; i++) {
        this.sums[i] += discrepancy
      }
    }
  }

  sumRange(left: number, right: number): number {
    let sum = 0
    if (left === 0) {
      return this.sums[right]
    }
    if (left > 0 && right < this.nums.length) {
      sum = this.sums[right] - this.sums[left - 1]
    }
    return sum
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
