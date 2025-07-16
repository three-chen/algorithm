"use strict";
function trap(height) {
    const l = height.length;
    const maxLeft = new Array(l + 1).fill(0);
    const maxRight = new Array(l + 1).fill(0);
    for (let i = 1; i <= l; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
        maxRight[l - i] = Math.max(maxRight[l - i + 1], height[l - i]);
    }
    let sums = 0;
    for (let i = 0; i < l; i++) {
        const left = maxLeft[i];
        const right = maxRight[i];
        let temp = Math.min(left, right) - height[i];
        temp = temp < 0 ? 0 : temp;
        sums += temp;
    }
    return sums;
}
console.log(trap([2, 7, 8, 1]));
