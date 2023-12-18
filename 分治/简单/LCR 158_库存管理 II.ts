// hashmap 求众数法
// function inventoryManagement(stock: number[]): number {
//   const l = stock.length
//   const compare = l / 2
//   const hash: any = {}
//   for (let i = 0; i < l; i++) {
//     const el = hash[stock[i]]
//     if (el) {
//       hash[stock[i]] = el + 1
//     } else {
//       hash[stock[i]] = 1
//     }
//     if (hash[stock[i]] > compare) {
//       return stock[i]
//     }
//   }
//   return Infinity
// }

// 摩尔投票法
function inventoryManagement(stock: number[]): number {
  const l = stock.length
  let vote = 1
  let multiNum = stock[0]
  for (let i = 1; i < l; i++) {
    if (vote === 0) {
      multiNum = stock[i]
      vote = 1
    } else {
      if (stock[i] === multiNum) {
        vote++
      } else {
        vote--
      }
    }
  }
  return multiNum
}
