"use strict";
function minimumCost(nums) {
    const l = nums.length;
    nums.sort((a, b) => a - b);
    let cost = 0;
    if (l % 2 === 1) {
        let compare = 0;
        const middle = Math.floor(l / 2);
        const [leftCompare, rightCompare] = getNear(nums[middle]);
        let leftCost = 0;
        let rightCost = 0;
        for (let i = 0; i < l; i++) {
            leftCost = leftCost + Math.abs(leftCompare - nums[i]);
            rightCost = rightCost + Math.abs(rightCompare - nums[i]);
        }
        cost = leftCost <= rightCost ? leftCost : rightCost;
    }
    else {
        const left = Math.floor(l / 2) - 1;
        const right = Math.floor(l / 2);
        const [leftBigger, leftSmaller] = getNear(nums[left]);
        const [rightBigger, rightSmaller] = getNear(nums[right]);
        let leftBiggerCost = 0;
        let leftSmallerCost = 0;
        let rightBiggerCost = 0;
        let rightSmallerCost = 0;
        for (let i = 0; i < l; i++) {
            leftBiggerCost = leftBiggerCost + Math.abs(leftBigger - nums[i]);
            leftSmallerCost = leftSmallerCost + Math.abs(leftSmaller - nums[i]);
            rightBiggerCost = rightBiggerCost + Math.abs(rightBigger - nums[i]);
            rightSmallerCost = rightSmallerCost + Math.abs(rightSmaller - nums[i]);
        }
        cost = Math.min(leftBiggerCost, leftSmallerCost, rightBiggerCost, rightSmallerCost);
    }
    return cost;
}
function getNear(num) {
    const bigger = findLargerPalindrome(num);
    const smaller = findSmallerPalindrome(num);
    return [bigger, smaller];
}
// 辅助函数，用于检查一个数是否为回文数
function isPalindrome(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
}
// 寻找比给定数小的最大回文数
function findSmallerPalindrome(number) {
    while (!isPalindrome(number)) {
        number--;
    }
    return number;
}
// 寻找比给定数大的最小回文数
function findLargerPalindrome(number) {
    while (!isPalindrome(number)) {
        number++;
    }
    return number;
}
console.log(minimumCost([109, 113, 115, 122, 128]));
