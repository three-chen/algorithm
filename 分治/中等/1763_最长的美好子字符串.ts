function longestNiceSubstring(s: string): string {
  const l = s.length
  const counter: Map<string, boolean> = new Map()
  for (let i = 0; i < l; i++) {
    const el = counter.get(s[i])
    if (el === undefined) {
      counter.set(s[i], false)
    }
  }
  counter.forEach((value, key) => {
    if (counter.get(key.toUpperCase()) === false && counter.get(key.toLowerCase()) === false) {
      counter.set(key.toLowerCase(), true)
      counter.set(key.toUpperCase(), true)
    }
  })

  console.log(counter)

  const split: string[] = []
  counter.forEach((value, key) => {
    if (value === false) {
      let index = s.indexOf(key)
      if (index !== -1) {
        while (s.length > 0) {
          index = s.indexOf(key)
          if (index !== -1) {
            split.push(s.substring(0, index))
            s = s.substring(index + 1)
          } else {
            split.push(s)
            s = ''
          }
        }
      }
    }
  })

  //   console.log(split)

  const lenSplit = split.length
  if (lenSplit === 0) return s
  let maxStr = ''
  for (let i = 0; i < lenSplit; i++) {
    const str = longestNiceSubstring(split[i])
    if (str.length > maxStr.length) {
      maxStr = str
    }
  }
  return maxStr
}

console.log(longestNiceSubstring('YazaAay'))
console.log(longestNiceSubstring('XqLJWaEEcAjslIXx'))
