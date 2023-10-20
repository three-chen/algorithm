function fib(n: number): number {
    if (n < 2) {
        return n;
    }
    let a = 0, b = 1, r = 0;
    for (let index = 2; index <= n; index++) {
        r = a + b;
        a = b;
        b = r;
    }
    return r;
};

console.log(fib(4));
