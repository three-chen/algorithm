function maxFrequencyScore(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)

  const l = nums.length
  const sums = new Array(l).fill(0)
  sums[0] = nums[0]
  for (let i = 1; i < l; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }
  let res = 0,
    left = 0,
    curres = 0
  for (let right = 0; right < l; right++) {
    curres = calculate(nums, sums, left, right, k)
    while (curres === 0 && curres < right) {
      left++
      curres = calculate(nums, sums, left, right, k)
    }

    if (curres > res) res = curres
  }
  return res
}

function calculate(nums: number[], sums: number[], left: number, right: number, k: number): number {
  const middle = Math.floor((left + right) / 2)
  const t = left > 0 ? sums[left - 1] : 0
  const sumleft = middle > 0 ? (middle - left) * nums[middle] - sums[middle - 1] + t : 0
  const sumright = sums[right] - sums[middle] - (right - middle) * nums[middle]
  if (sumleft + sumright > k) {
    return 0
  } else {
    return right - left + 1
  }
}

console.log(maxFrequencyScore([27, 8, 30, 3, 13, 28, 7, 14, 21, 19, 24, 28, 29, 1, 14, 22, 6], 23))
