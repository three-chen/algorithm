function tribonacci(n: number): number {
    if (n < 2) {
        return n;
    }
    if (n === 2) {
        return 1;
    }
    let a = 0, b = 1, c = 1, r = 0;
    for (let index = 3; index <= n; index++) {
        r = c + b + a;
        a = b;
        b = c;
        c = r;
    }
    return r;
};

console.log(tribonacci(3), tribonacci(4), tribonacci(25));
