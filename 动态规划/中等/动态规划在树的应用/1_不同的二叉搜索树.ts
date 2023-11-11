function numTrees(n: number): number {
  return G(n)
}

function G(n: number): number {
  if (n === 0 || n === 1) {
    return 1
  }
  let r: number = 0
  for (let i = 1; i <= n; i++) {
    r = r + F(i, n)
  }
  return r
}

function F(i: number, n: number): number {
  return G(i - 1) * G(n - i)
}

console.log(numTrees(3))
console.log(numTrees(1))
