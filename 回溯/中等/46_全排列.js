"use strict";
function permute(nums) {
    const res = [];
    quanPaiLie(nums, res, []);
    return res;
}
function quanPaiLie(nums, res, curPaiLie) {
    if (nums.length === 0) {
        let newA = [];
        newA = Object.assign(newA, curPaiLie);
        res.push(newA);
        return;
    }
    nums.forEach((value, index, array) => {
        let newArr = [];
        newArr = Object.assign(newArr, array);
        newArr.splice(index, 1);
        curPaiLie.push(value);
        quanPaiLie(newArr, res, curPaiLie);
        curPaiLie.pop();
    });
}
console.log(permute([1, 2, 3]));
console.log(permute([1]));
