"use strict";
function longestOnes(nums, k) {
    const l = nums.length;
    let left = 0, right = 0, flipTimes = k;
    let max = 0;
    while (right < l) {
        if (nums[right] === 1) {
            right++;
        }
        else {
            if (flipTimes > 0) {
                right++;
                flipTimes--;
            }
            else {
                if (right - left > max)
                    max = right - left;
                while (nums[left] === 1) {
                    left++;
                }
                flipTimes++;
                left++;
            }
        }
    }
    return max;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
