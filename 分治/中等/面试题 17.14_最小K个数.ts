function smallestK(arr: number[], k: number): number[] {
  const l = arr.length
  const stack = [[0, l - 1]]
  while (stack.length > 0) {
    const [start, end] = stack.shift()!
    let left = start,
      right = end
    if (left < right) {
      const base = arr[left]
      while (left < right) {
        while (left < right && arr[right] >= base) {
          right--
        }
        arr[left] = arr[right]
        while (left < right && arr[left] <= base) {
          left++
        }
        arr[right] = arr[left]
      }
      arr[left] = base
      if (left === k || left === k - 1) {
        break
      } else if (left > k) {
        stack.push([start, left - 1])
      } else {
        stack.push([left + 1, end])
      }
    }
  }
  return arr.slice(0, k)
}
