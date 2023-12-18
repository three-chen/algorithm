function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
  const map: Map<number, Array<[string, number]>> = new Map()
  queries.forEach((value, index) => {
    const trim = value[1]
    if (!map.get(trim)) {
      map.set(
        trim,
        nums.map((str, index) => {
          return [str.slice(-trim), index]
        })
      )
    }
  })

  map.forEach((value, key) => {
    value.sort((a, b) => {
      if (a[0].length > b[0].length) {
        return 1
      } else if (a[0].length < b[0].length) {
        return -1
      } else {
        const l = a[0].length
        for (let i = 0; i < l; i++) {
          if (a[0][i] > b[0][i]) {
            return 1
          } else if (a[0][i] < b[0][i]) {
            return -1
          }
        }
      }
      return 0
    })
  })

  const res: number[] = []

  queries.forEach(value => {
    const [k, trim] = value
    res.push(map.get(trim)![k - 1][1])
  })
  return res
}

console.log(
  smallestTrimmedNumbers(
    ['102', '473', '251', '814'],
    [
      [1, 1],
      [2, 3],
      [4, 2],
      [1, 2]
    ]
  )
)
