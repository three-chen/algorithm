function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    dp[0][0] = 1;
    let flag = true;
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0;
            flag = false;
        } else {
            if (flag) {
                dp[i][0] = 1
            } else {
                dp[i][0] = 0
            }
        }
    }
    flag = true;
    for (let i = 1; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            dp[0][i] = 0
            flag = false;
        } else {
            if (flag) {
                dp[0][i] = 1
            } else {
                dp[0][i] = 0
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] === 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));
