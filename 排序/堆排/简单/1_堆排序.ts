// 大顶堆
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

function maxHeapSort(nums: number[]) {
  build_max_heap(nums)

  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, i, 0)
    max_heapify(nums, i, 0)
  }
  return nums
}

// 小顶堆
// function min_heapify(nums: number[], len: number, index: number) {
//   const left = index * 2 + 1
//   const right = index * 2 + 2
//   let minimum = index
//   if (left < len && nums[left] < nums[minimum]) {
//     minimum = left
//   }
//   if (right < len && nums[right] < nums[minimum]) {
//     minimum = right
//   }
//   if (minimum !== index) {
//     swap(nums, minimum, index)
//     min_heapify(nums, len, minimum)
//   }
// }

// function build_min_heap(nums: number[]) {
//   const l = nums.length
//   for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
//     min_heapify(nums, l, i)
//   }
// }

// function minHeapSort(nums: number[]) {
//   build_min_heap(nums)

//   for (let i = nums.length - 1; i > 0; i--) {
//     swap(nums, i, 0)
//     min_heapify(nums, i, 0)
//   }
//   return nums
// }

function swap(arr: number[], a: number, b: number) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

console.log(maxHeapSort([9, 1, 2, 5, 7, 4, 8, 6, 3, 5]))
