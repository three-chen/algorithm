function findRepeatedDnaSequences(s: string): string[] {
  const l = s.length
  if (l < 10) return []
  const res: string[] = []
  let right = 9
  const mymap: Map<string, number> = new Map()
  while (right < l) {
    const str = s.substring(right - 9, right + 1)
    const el = mymap.get(str)
    if (el === undefined) {
      mymap.set(str, 1)
    } else {
      mymap.set(str, el + 1)
    }
    right++
  }
  for (const [key, value] of mymap) {
    if (value > 1) res.push(key)
  }
  return res
}
