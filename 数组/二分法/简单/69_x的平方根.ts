function mySqrt(x: number): number {
  let left = 0,
    right = x,
    m = 0;
  while (left <= right) {
    m = Math.floor((left + right) / 2);
    if (m * m === x) {
      return m;
    } else if (m * m < x) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }
  return left - 1;
}
