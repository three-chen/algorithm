// 每一行二分做法
// function findTargetIn2DPlants(plants: number[][], target: number): boolean {
//   const row = plants.length
//   if (row === 0) return false
//   const column = plants[0].length

//   for (let i = 0; i < row; i++) {
//     if (erfenS(plants[i], target)) {
//       return true
//     }
//   }
//   return false
// }

// function erfenS(nums: number[], target: number): boolean {
//   let left = 0,
//     right = nums.length - 1
//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2)
//     if (nums[middle] === target) {
//       return true
//     } else if (nums[middle] < target) {
//       left = middle + 1
//     } else {
//       right = middle - 1
//     }
//   }
//   return false
// }

function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  const row = plants.length
  if (row === 0) return false
  const column = plants[0].length

  let i = 0,
    j = column - 1
  while (i < row && column >= 0) {
    if (plants[i][j] === target) {
      return true
    } else if (plants[i][j] > target) {
      j--
    } else {
      i++
    }
  }
  return false
}
