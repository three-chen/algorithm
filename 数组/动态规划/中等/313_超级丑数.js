"use strict";
function nthSuperUglyNumber(n, primes) {
    const l = primes.length;
    const ptr = new Array(l).fill(0);
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        let index = -1, min = Infinity;
        for (let j = 0; j < l; j++) {
            if (dp[ptr[j]] * primes[j] < min) {
                min = dp[ptr[j]] * primes[j];
                index = j;
            }
            else if (dp[ptr[j]] * primes[j] === min) {
                ptr[j]++;
            }
        }
        dp[i] = min;
        ptr[index]++;
    }
    console.log(dp);
    return dp[n - 1];
}
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
console.log(nthSuperUglyNumber(1, [2, 3, 5]));
