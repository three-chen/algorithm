function findTheLongestSubstring(s: string): number {
  const l = s.length
  let state = 0
  const map: Map<number, number> = new Map() //state,index
  map.set(0, -1)
  let max = 0
  for (let i = 0; i < l; i++) {
    if (s[i] === 'a') {
      state = state ^ (1 << 0)
    } else if (s[i] === 'e') {
      state = state ^ (1 << 1)
    } else if (s[i] === 'i') {
      state = state ^ (1 << 2)
    } else if (s[i] === 'o') {
      state = state ^ (1 << 3)
    } else if (s[i] === 'u') {
      state = state ^ (1 << 4)
    }
    const el = map.get(state)
    if (el !== undefined) {
      console.log(el, i, i - el)

      max = Math.max(i - el, max)
    } else {
      map.set(state, i)
    }
  }
  return max
}

console.log(findTheLongestSubstring('eleetminicoworoep'))
