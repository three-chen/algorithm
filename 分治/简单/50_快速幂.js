"use strict";
function myPow(x, n) {
    if (n >= 0)
        return quickMi(x, n);
    return 1 / quickMi(x, -n);
}
function quickMi(x, n) {
    if (n === 0)
        return 1;
    const y = myPow(x, Math.trunc(n / 2));
    return n % 2 === 1 ? y * y * x : y * y;
}
console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
