function maximalSquare(matrix: string[][]): number {
    let res = 0;
    const r = matrix.length;
    const c = matrix[0].length;
    const dp = new Array(r).fill(0).map(() => new Array(c).fill(0))
    for (let i = 0; i < c; i++) {
        dp[0][i] = Number(matrix[0][i])
        if (dp[0][i] > res) {
            res = dp[0][i]
        }
    }
    for (let i = 0; i < r; i++) {
        dp[i][0] = Number(matrix[i][0])
        if (dp[i][0] > res) {
            res = dp[i][0]
        }
    }
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0
            } else {
                if (dp[i][j - 1] === 0 || dp[i - 1][j] === 0 || dp[i - 1][j - 1] === 0) {
                    dp[i][j] = 1;
                }
                else {
                    dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
                }
            }

            if (dp[i][j] > res) {
                res = dp[i][j]
            }
        }
    }
    return res ** 2
};

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
console.log(maximalSquare([["0", "1"], ["1", "0"]]));
console.log(maximalSquare([["0"]]));
