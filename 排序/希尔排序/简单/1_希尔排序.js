"use strict";
function shellSort(nums) {
    let gap = Math.floor(nums.length / 2);
    let temp = 0, i = 0, j = 0;
    while (gap > 0) {
        for (i = gap; i < nums.length; i++) {
            temp = nums[i];
            for (j = i - gap; j >= 0 && nums[j] > temp; j = j - gap) {
                nums[j + gap] = nums[j];
            }
            nums[j + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return nums;
}
console.log(shellSort([9, 1, 2, 5, 7, 4, 8, 6, 3, 5]));
