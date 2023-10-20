function maximalSquare(matrix) {
    var res = 0;
    var r = matrix.length;
    var c = matrix[0].length;
    var dp = new Array(r).fill(0).map(function () { return new Array(c).fill(0); });
    for (var i = 0; i < c; i++) {
        dp[0][i] = Number(matrix[0][i]);
        if (dp[0][i] > res) {
            res = dp[0][i];
        }
    }
    for (var i = 0; i < r; i++) {
        dp[i][0] = Number(matrix[i][0]);
        if (dp[i][0] > res) {
            res = dp[i][0];
        }
    }
    for (var i = 1; i < r; i++) {
        for (var j = 1; j < c; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            }
            else {
                if (dp[i][j - 1] === 0 || dp[i - 1][j] === 0 || dp[i - 1][j - 1] === 0) {
                    dp[i][j] = 1;
                }
                else {
                    dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
                }
            }
            if (dp[i][j] > res) {
                res = dp[i][j];
            }
        }
    }
    return Math.pow(res, 2);
}
;
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
console.log(maximalSquare([["0", "1"], ["1", "0"]]));
console.log(maximalSquare([["0"]]));
