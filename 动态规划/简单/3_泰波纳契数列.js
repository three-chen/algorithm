function tribonacci(n) {
    if (n < 2) {
        return n;
    }
    if (n === 2) {
        return 1;
    }
    var a = 0, b = 1, c = 1, r = 0;
    for (var index = 3; index <= n; index++) {
        r = c + b + a;
        a = b;
        b = c;
        c = r;
    }
    return r;
}
;
console.log(tribonacci(3), tribonacci(4), tribonacci(25));
