"use strict";
function stoneGameII(piles) {
    const l = piles.length;
    const sums = new Array(l).fill(0);
    sums[l - 1] = piles[l - 1];
    for (let i = l - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i];
    }
    const memory = new Map();
    return getPile(piles, sums, memory, 0, 1);
}
function getPile(piles, sums, memory, index, M) {
    let max = 0;
    for (let i = index; i < index + 2 * M; i++) {
        if (i >= piles.length)
            return max;
        const nextIndex = i + 1;
        const nextM = Math.max(M, i - index + 1);
        let temp = memory.get(`${nextIndex}+${nextM}`);
        if (temp === undefined) {
            temp = Math.min(getPile(piles, sums, memory, i + 1, Math.max(M, i - index + 1)));
            memory.set(`${nextIndex}+${nextM}`, temp);
        }
        max = Math.max(max, sums[index] - temp);
    }
    return max;
}
console.log(stoneGameII([2, 7, 9, 4, 4]));
