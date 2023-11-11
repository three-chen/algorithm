function mergeSort(nums: number[]): number[] {
  const l = nums.length
  if (l < 2) {
    return nums
  }
  const middle = Math.floor(l / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(nums1: number[], nums2: number[]): number[] {
  const len1 = nums1.length
  const len2 = nums2.length
  let ptr1 = 0
  let ptr2 = 0
  const newArr: number[] = []
  while (ptr1 < len1 && ptr2 < len2) {
    if (nums1[ptr1] < nums2[ptr2]) {
      newArr.push(nums1[ptr1])
      ptr1++
    } else {
      newArr.push(nums2[ptr2])
      ptr2++
    }
  }
  if (ptr1 < len1) {
    while (ptr1 < len1) {
      newArr.push(nums1[ptr1])
      ptr1++
    }
  }
  if (ptr2 < len2) {
    while (ptr2 < len2) {
      newArr.push(nums2[ptr2])
      ptr2++
    }
  }
  return newArr
}

console.log(mergeSort([9, 1, 2, 5, 7, 4, 8, 6, 3, 5]))
