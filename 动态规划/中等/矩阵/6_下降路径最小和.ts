function minFallingPathSum(matrix: number[][]): number {
    const r = matrix.length;
    const c = matrix[0].length;
    const dp = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let i = 0; i < c; i++) {
        dp[0][i] = matrix[0][i];
    }
    for (let i = 1; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (dp[i - 1][j - 1] === undefined && dp[i - 1][j + 1] === undefined) {
                dp[i][j] = dp[i - 1][j] + matrix[i][j]
            } else if (dp[i - 1][j + 1] === undefined) {
                dp[i][j] = Math.min(dp[i - 1][j] + matrix[i][j], dp[i - 1][j - 1] + matrix[i][j])
            } else if (dp[i - 1][j - 1] === undefined) {
                dp[i][j] = Math.min(dp[i - 1][j] + matrix[i][j], dp[i - 1][j + 1] + matrix[i][j])
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + matrix[i][j], dp[i - 1][j - 1] + matrix[i][j], dp[i - 1][j + 1] + matrix[i][j])
            }
        }
    }
    return Math.min(...dp[r - 1])
};

console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
console.log(minFallingPathSum([[-19, 57], [-40, -5]]));
