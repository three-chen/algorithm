function uniquePaths(m: number, n: number): number {
    if (m === 1 || n === 1) {
        return 1
    }
    let dp: number[][] = new Array(m)
    for (let i = 0; i < m; i++) {        //一维长度为5
        dp[i] = new Array(n)
        for (let j = 0; j < n; j++) {    //二维长度为5
            if (j === 0) {
                dp[i][j] = 1;
            } else if (i === 0) {
                dp[i][j] = 1;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]
};

console.log(uniquePaths(3, 2));
