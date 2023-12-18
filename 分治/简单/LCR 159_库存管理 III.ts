function inventoryManagement(stock: number[], cnt: number): number[] {
  quickSort(stock, 0, stock.length - 1, cnt)
  return stock.slice(0, cnt)
}

function quickSort(nums: number[], start: number, end: number, cnt: number) {
  if (start >= end) return

  let left = start,
    right = end
  const base = nums[start]
  while (left < right) {
    while (left < right && nums[right] >= base) {
      right--
    }
    nums[left] = nums[right]
    while (left < right && nums[left] <= base) {
      left++
    }
    nums[right] = nums[left]
  }
  nums[left] = base
  if (left === cnt || left === cnt - 1) {
    return
  } else if (left > cnt) {
    quickSort(nums, start, left - 1, cnt)
  } else {
    quickSort(nums, left + 1, end, cnt)
  }
}

console.log(inventoryManagement([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8))
