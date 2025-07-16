"use strict";
function maxScore(cardPoints, k) {
    const l = cardPoints.length;
    const sums = new Array(l + 1).fill(0);
    sums[0] = 0;
    for (let i = 1; i <= l; i++) {
        sums[i] = sums[i - 1] + cardPoints[i - 1];
    }
    console.log(sums);
    let min = Infinity;
    for (let left = 0; left <= k; left++) {
        const right = left + l - k - 1;
        console.log(left, right, sums[right + 1] - sums[left]);
        min = Math.min(min, sums[right + 1] - sums[left]);
    }
    return sums[l] - min;
}
console.log(maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8));
