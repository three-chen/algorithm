function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diff = new Array(n).fill(0)
  const l = bookings.length
  for (let i = 0; i < l; i++) {
    const [first, last, seat] = bookings[i]
    diff[first - 1] = diff[first - 1] + seat
    if (last < n) {
      diff[last] = diff[last] - seat
    }
  }
  const res = new Array(n).fill(0)
  res[0] = diff[0]
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] + diff[i]
  }
  return res
}
