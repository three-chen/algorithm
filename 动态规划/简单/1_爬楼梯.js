function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    var a = 1, b = 2;
    var result = 0;
    for (var index = 3; index <= n; index++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
;
console.log(climbStairs(6));
