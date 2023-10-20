function fib(n) {
    if (n < 2) {
        return n;
    }
    var a = 0, b = 1, r = 0;
    for (var index = 2; index <= n; index++) {
        r = a + b;
        a = b;
        b = r;
    }
    return r;
}
;
console.log(fib(4));
