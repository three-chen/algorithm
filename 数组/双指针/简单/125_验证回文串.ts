function isPalindrome(s: string): boolean {
  const l = s.length
  const str = s.toLowerCase()
  let left = 0,
    right = l - 1
  while (left < right) {
    let lt = /[a-zA-Z0-9]/.test(str[left]),
      rt = /[a-zA-Z0-9]/.test(str[right])
    if (lt === false && rt === false) {
      left++
      right--
    } else if (lt === false) {
      left++
    } else if (rt === false) {
      right--
    } else {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
  }
  return true
}
