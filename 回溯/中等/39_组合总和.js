"use strict";
function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    console.log(candidates);
    const res = [];
    backTracing(candidates, target, res, 0, candidates.length - 1, [], 0);
    return res;
}
function backTracing(candidates, target, res, start, end, curLi, curSum) {
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
        curLi.push(num);
        curSum += num;
        backTracing(candidates, target, res, i, end, curLi, curSum);
        curLi.pop();
        curSum -= num;
    }
}
console.log(combinationSum([2, 3, 8, 4], 6));
console.log(combinationSum([2, 3, 6, 7], 7));
