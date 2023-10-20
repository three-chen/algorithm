function minFallingPathSum(matrix) {
    var r = matrix.length;
    var c = matrix[0].length;
    var dp = new Array(r).fill(0).map(function () { return new Array(c).fill(0); });
    for (var i = 0; i < c; i++) {
        dp[0][i] = matrix[0][i];
    }
    for (var i = 1; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (dp[i - 1][j - 1] === undefined && dp[i - 1][j + 1] === undefined) {
                dp[i][j] = dp[i - 1][j] + matrix[i][j];
            }
            else if (dp[i - 1][j + 1] === undefined) {
                dp[i][j] = Math.min(dp[i - 1][j] + matrix[i][j], dp[i - 1][j - 1] + matrix[i][j]);
            }
            else if (dp[i - 1][j - 1] === undefined) {
                dp[i][j] = Math.min(dp[i - 1][j] + matrix[i][j], dp[i - 1][j + 1] + matrix[i][j]);
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j] + matrix[i][j], dp[i - 1][j - 1] + matrix[i][j], dp[i - 1][j + 1] + matrix[i][j]);
            }
        }
    }
    return Math.min.apply(Math, dp[r - 1]);
}
;
console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
console.log(minFallingPathSum([[-19, 57], [-40, -5]]));
