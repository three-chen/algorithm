function hammingWeight(n: number): number {
  let res = 0
  while (n) {
    res++
    n = n & (n - 1)
  }
  return res
}
// function hammingWeight(n: number): number {
//   let res = 0
//   for (let i = 0; i < 32; i++) {
//     if ((n & (1 << i)) !== 0) {
//       res++
//     }
//   }
//   return res
// }
