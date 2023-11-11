"use strict";
function numTrees(n) {
    return G(n);
}
function G(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let r = 0;
    for (let i = 1; i <= n; i++) {
        r = r + F(i, n);
    }
    return r;
}
function F(i, n) {
    return G(i - 1) * G(n - i);
}
console.log(numTrees(3));
console.log(numTrees(1));
