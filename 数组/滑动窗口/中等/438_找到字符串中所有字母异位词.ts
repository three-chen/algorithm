function findAnagrams(s: string, p: string): number[] {
  const l = s.length
  const size = p.length
  let left = 0,
    right = size - 1
  const myMap: Map<string, number> = new Map()
  const exist: Map<string, number> = new Map()
  let flag = 0
  let curFlag = 0
  for (let i = 0; i < size; i++) {
    const el = exist.get(p[i])
    if (el === undefined) {
      exist.set(p[i], 1)
      flag = flag | (1 << (p.charCodeAt(i) - 'a'.charCodeAt(0)))
    } else {
      exist.set(p[i], el + 1)
    }
  }
  for (let i = 0; i < size; i++) {
    const el = myMap.get(s[i])
    if (el === undefined) {
      myMap.set(s[i], 1)
    } else {
      myMap.set(s[i], el + 1)
    }
    if (myMap.get(s[i]) === exist.get(s[i])) {
      curFlag = curFlag | (1 << (s.charCodeAt(i) - 'a'.charCodeAt(0)))
    } else {
      curFlag = curFlag & ~(1 << (s.charCodeAt(i) - 'a'.charCodeAt(0)))
    }
  }

  const res: number[] = []
  while (right < l) {
    if (curFlag === flag) res.push(left)

    let el = myMap.get(s[left])
    myMap.set(s[left], el! - 1)
    curFlag = curFlag & ~(1 << (s.charCodeAt(left) - 'a'.charCodeAt(0)))
    if (myMap.get(s[left]) === exist.get(s[left])) curFlag = curFlag | (1 << (s.charCodeAt(left) - 'a'.charCodeAt(0)))
    left++

    right++
    el = myMap.get(s[right])
    if (el === undefined) {
      myMap.set(s[right], 1)
    } else {
      myMap.set(s[right], el + 1)
    }
    if (myMap.get(s[right]) === exist.get(s[right])) {
      curFlag = curFlag | (1 << (s.charCodeAt(right) - 'a'.charCodeAt(0)))
    } else {
      curFlag = curFlag & ~(1 << (s.charCodeAt(right) - 'a'.charCodeAt(0)))
    }
  }
  return res
}

console.log(findAnagrams('abacbabc', 'abc'))
