class Solution {
  private sums: number[]
  constructor(w: number[]) {
    const l = w.length
    this.sums = new Array(l).fill(0)
    this.sums[0] = w[0]
    for (let i = 1; i < l; i++) {
      this.sums[i] = this.sums[i - 1] + w[i]
    }
  }

  pickIndex(): number {
    const l = this.sums.length
    const target = Math.floor(Math.random() * this.sums[l - 1])
    const index = this.erFen(this.sums, target)
    return index
  }

  erFen(nums: number[], target: number): number {
    let left = 0,
      right = nums.length - 1
    while (left <= right) {
      const base = Math.floor((left + right) / 2)
      if (nums[base] === target) {
        return base + 1
      } else if (nums[base] > target) {
        right = base - 1
      } else {
        left = base + 1
      }
    }
    return left
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
