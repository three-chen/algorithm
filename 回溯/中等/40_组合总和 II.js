"use strict";
function combinationSum2(candidates, target) {
    const res = [];
    if (candidates.length === 0)
        return res;
    candidates.sort((a, b) => a - b);
    backTrace(candidates, target, 0, candidates.length - 1, res, [], 0);
    return res;
}
function backTrace(candidates, target, start, end, res, curLi, curSum) {
    if (curSum === target) {
        let newLi = [];
        newLi = Object.assign(newLi, curLi);
        res.push(newLi);
        return;
    }
    else if (curSum > target) {
        return;
    }
    for (let i = start; i <= end; i++) {
        const num = candidates[i];
        if (num > target) {
            break;
        }
        if (i > start && num === candidates[i - 1]) {
            continue;
        }
        console.log(start, end, curLi);
        curLi.push(num);
        curSum += num;
        backTrace(candidates, target, i + 1, end, res, curLi, curSum);
        curSum -= num;
        curLi.pop();
    }
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
