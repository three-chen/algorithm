function uniquePaths(m, n) {
    if (m === 1 || n === 1) {
        return 1;
    }
    var dp = new Array(m);
    for (var i = 0; i < m; i++) { //一维长度为5
        dp[i] = new Array(n);
        for (var j = 0; j < n; j++) { //二维长度为5
            if (j === 0) {
                dp[i][j] = 1;
            }
            else if (i === 0) {
                dp[i][j] = 1;
            }
        }
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
;
console.log(uniquePaths(3, 2));
