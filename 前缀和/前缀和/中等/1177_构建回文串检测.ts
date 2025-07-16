function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const res: boolean[] = []
  const l = s.length
  const sums: number[] = new Array(l).fill(0)
  sums[0] = 1 << (s.charCodeAt(0) - 'a'.charCodeAt(0))
  for (let i = 1; i < l; i++) {
    sums[i] = sums[i - 1] ^ (1 << (s.charCodeAt(i) - 'a'.charCodeAt(0)))
  }

  for (let i = 0; i < queries.length; i++) {
    const [left, right, k] = queries[i]
    res.push(testPali(s, sums, left, right, k))
  }
  return res
}

function testPali(s: string, sums: number[], left: number, right: number, k: number): boolean {
  let num = sums[right]
  if (left > 0) {
    num = sums[right] ^ sums[left - 1]
  }

  let res = false
  const count = countOfOne(num)
  // 奇数
  if ((right - left + 1) % 2 === 1) {
    if (count / 2 <= k + 1) res = true
  }
  // 偶数
  else {
    if (count / 2 <= k) res = true
  }
  return res
}

function countOfOne(num: number): number {
  let res = 0
  while (num) {
    res++
    num = num & (num - 1)
  }
  return res
}

console.log(
  canMakePaliQueries('abcda', [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1]
  ])
)
