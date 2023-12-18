class Solution {
  private rects: number[][]
  private len: number
  private sum: number
  private areas: number[]
  constructor(rects: number[][]) {
    this.rects = rects.filter(rect => {
      let [xmin, ymin, xmax, ymax] = rect
      xmin = Math.ceil(xmin)
      ymin = Math.ceil(ymin)
      xmax = Math.floor(xmax)
      ymax = Math.floor(ymax)

      if (xmax - xmin >= 0 && ymax - ymin >= 0) {
        return [xmin, ymin, xmax, ymax]
      }
    })
    this.len = this.rects.length
    this.areas = new Array(this.len + 1).fill(0)
    for (let i = 1; i <= this.len; i++) {
      const [xmin, ymin, xmax, ymax] = this.rects[i - 1]
      this.areas[i] = (xmax - xmin + 1) * (ymax - ymin + 1) + this.areas[i - 1]
    }
    this.sum = this.areas[this.len]
  }

  pick(): number[] {
    const i = Math.floor(Math.random() * this.sum)
    let left = 0,
      right = this.len
    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      if (this.areas[middle] === i) {
        left = middle + 1
        break
      } else if (this.areas[middle] < i) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
    const [xmin, ymin, xmax, ymax] = this.rects[left - 1]
    const x = Math.floor(Math.random() * (xmax - xmin)) + xmin
    const y = Math.floor(Math.random() * (ymax - ymin)) + ymin
    return [x, y]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
