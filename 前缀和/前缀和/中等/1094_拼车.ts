function carPooling(trips: number[][], capacity: number): boolean {
  const l = trips.length
  const map: any = {}
  for (let i = 0; i < l; i++) {
    const getOn = map[trips[i][1]]
    const getOff = map[trips[i][2]]
    if (getOn !== undefined) {
      map[trips[i][1]] = getOn + trips[i][0]
    } else {
      map[trips[i][1]] = trips[i][0]
    }
    if (getOff !== undefined) {
      map[trips[i][2]] = getOff - trips[i][0]
    } else {
      map[trips[i][2]] = -trips[i][0]
    }
  }
  let count = 0
  for (const key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      count = count + map[key]
      if (count > capacity) {
        return false
      }
    }
  }
  return true
}
