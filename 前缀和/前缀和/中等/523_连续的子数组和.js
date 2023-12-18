"use strict";
// 普通前缀和，超时
// function checkSubarraySum(nums: number[], k: number): boolean {
//   const l = nums.length
//   if (l === 0) return false
//   const sums = new Array(l).fill(0)
//   sums[0] = nums[0]
//   for (let i = 1; i < l; i++) {
//     sums[i] = nums[i] + sums[i - 1]
//   }
//   for (let i = 1; i < l; i++) {
//     const sum = sums[i]
//     let rightSum = sum
//     for (let j = 0; j < i; j++) {
//       if (rightSum % k === 0) {
//         return true
//       }
//       rightSum = rightSum - nums[j]
//     }
//   }
//   return false
// }
// 前缀和 + 同余哈希表
function checkSubarraySum(nums, k) {
    const l = nums.length;
    if (l === 0)
        return false;
    const sums = new Array(l).fill(0);
    sums[0] = nums[0];
    for (let i = 1; i < l; i++) {
        sums[i] = nums[i] + sums[i - 1];
    }
    const map = new Map();
    for (let i = 0; i < l; i++) {
        const yu = sums[i] % k;
        if (yu === 0 && i !== 0)
            return true;
        let index = map.get(yu);
        console.log(yu, index);
        if (index) {
            if (i - index > 1)
                return true;
        }
        else {
            map.set(yu, i);
        }
        console.log(map);
    }
    return false;
}
console.log(checkSubarraySum([1, 2, 3], 5));
