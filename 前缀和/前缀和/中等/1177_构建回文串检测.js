"use strict";
function canMakePaliQueries(s, queries) {
    const res = [];
    const l = s.length;
    const sums = new Array(l).fill(0);
    sums[0] = 1 << (s.charCodeAt(0) - 'a'.charCodeAt(0));
    for (let i = 1; i < l; i++) {
        sums[i] = sums[i - 1] ^ (1 << (s.charCodeAt(i) - 'a'.charCodeAt(0)));
    }
    for (let i = 0; i < queries.length; i++) {
        const [left, right, k] = queries[i];
        res.push(testPali(s, sums, left, right, k));
    }
    return res;
}
function testPali(s, sums, left, right, k) {
    let num = sums[right];
    if (left > 0) {
        num = sums[right] ^ sums[left - 1];
    }
    let res = false;
    const count = countOfOne(num);
    console.log(s.slice(left, right + 1), num, count, k);
    // 奇数
    if ((right - left + 1) % 2 === 1) {
        if (count / 2 <= k + 1)
            res = true;
    }
    // 偶数
    else {
        if (count / 2 <= k)
            res = true;
    }
    return res;
}
function countOfOne(num) {
    let res = 0;
    while (num) {
        res++;
        num = num & (num - 1);
    }
    return res;
}
console.log(canMakePaliQueries('abcda', [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1]
]));
