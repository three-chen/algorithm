type times = number
type whichNum = number

function topKFrequent(nums: number[], k: number): number[] {
  const l = nums.length
  const map: Map<number, number> = new Map()
  for (let i = 0; i < l; i++) {
    const el = map.get(nums[i])
    if (el) {
      map.set(nums[i], el + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  const arr: Array<[times, whichNum]> = []
  map.forEach((value, key) => {
    arr.push([value, key])
  })

  const res: number[] = []
  const len = arr.length
  buildMaxHeap(arr)
  for (let i = 0; i < k; i++) {
    res.push(arr[0][1])
    swap(arr, 0, len - i - 1)
    heapify(arr, len - i - 1, 0)
  }
  return res
}

function buildMaxHeap(nums: number[][]) {
  const l = nums.length
  for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
    heapify(nums, l, i)
  }
}

function heapify(nums: number[][], len: number, index: number) {
  const left = 2 * index + 1
  const right = 2 * index + 2
  let max = index
  if (left < len && nums[left][0] > nums[max][0]) {
    max = left
  }
  if (right < len && nums[right][0] > nums[max][0]) {
    max = right
  }
  if (max !== index) {
    swap(nums, max, index)
    heapify(nums, len, max)
  }
}

function swap(nums: number[][], index1: number, index2: number) {
  const temp = nums[index1]
  nums[index1] = nums[index2]
  nums[index2] = temp
}
