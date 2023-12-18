"use strict";
function pivotIndex(nums) {
    const totalSum = nums.reduce((a, b) => a + b);
    let leftSum = 0, rightSum = totalSum - nums[0];
    console.log(totalSum);
    let i = 0;
    while (i < nums.length - 1) {
        console.log(leftSum, rightSum);
        if (leftSum === rightSum) {
            return i;
        }
        else {
            leftSum = leftSum + nums[i];
            rightSum = rightSum - nums[++i];
        }
    }
    if (leftSum === rightSum) {
        return i;
    }
    return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
