"use strict";
function canJump(nums) {
    const l = nums.length;
    const bArr = new Array(l).fill(false);
    bArr[0] = true;
    let jump = 0;
    let index = -1;
    for (let i = 0; i < l - 1; i++) {
        jump = nums[i];
        index = -1;
        while (jump > 0 && bArr[i]) {
            index = i + jump;
            if (index >= l - 1) {
                return true;
            }
            bArr[index] = true;
            jump--;
        }
    }
    return bArr[l - 1];
}
console.log(canJump([3, 2, 1, 0, 4]));
