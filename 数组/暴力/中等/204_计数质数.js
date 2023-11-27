"use strict";
function countPrimes(n) {
    if (n < 3)
        return 0;
    if (n === 3)
        return 1;
    let sum = 1;
    for (let i = 3; i < n; i = i + 2) {
        if (isZhiShu(i)) {
            sum++;
        }
    }
    return sum;
}
function isZhiShu(num) {
    const base = Math.floor(Math.sqrt(num));
    console.log('test', num, base);
    for (let i = 3; i <= base; i = i + 2) {
        if (num % i === 0) {
            return false;
        }
    }
    console.log(num, 'is prime');
    return true;
}
console.log(countPrimes(12));
