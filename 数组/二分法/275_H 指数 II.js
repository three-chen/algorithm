"use strict";
function hIndex(citations) {
    const l = citations.length;
    let target = 0;
    let left = 0, right = l - 1;
    while (left <= right) {
        const base = Math.floor((left + right) / 2);
        target = l - base;
        console.log(base, target, citations[base]);
        if (citations[base] === target) {
            return target;
        }
        else if (citations[base] > target) {
            right = base - 1;
        }
        else {
            left = base + 1;
        }
    }
    return target;
}
console.log(hIndex([0]));
