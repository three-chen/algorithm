function max_heapify(nums: number[], len: number, index: number) {
  const left = index * 2 + 1
  const right = index * 2 + 2
  let largest = index
  if (left < len && nums[left] > nums[largest]) {
    largest = left
  }
  if (right < len && nums[right] > nums[largest]) {
    largest = right
  }
  if (largest !== index) {
    swap(nums, largest, index)
    max_heapify(nums, len, largest)
  }
}

function build_max_heap(nums: number[]) {
  const l = nums.length
  for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
    max_heapify(nums, l, i)
  }
}

function heapSort(nums: number[]) {
  build_max_heap(nums)

  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, i, 0)
    max_heapify(nums, i - 1, 0)
  }
  return nums
}

function swap(arr: number[], a: number, b: number) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

console.log(heapSort([9, 1, 2, 5, 7, 4, 8, 6, 3, 5]))
