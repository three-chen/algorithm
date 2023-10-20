function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }
    let a: number = 1, b: number = 2;
    let result: number = 0;
    for (let index = 3; index <= n; index++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result
};

console.log(climbStairs(6));
