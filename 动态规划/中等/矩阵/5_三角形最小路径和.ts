function minimumTotal(triangle: number[][]): number {
    const n = triangle.length;
    const dp = new Array(n).fill(0);
    for (let r = 0; r < n; r++) {
        dp[r] = new Array(triangle[r].length).fill(0);
    }
    dp[0][0] = triangle[0][0]
    for (let r = 1; r < n; r++) {
        for (let c = 0; c < triangle[r].length; c++) {
            if (dp[r - 1][c] !== undefined && dp[r - 1][c - 1] !== undefined) {
                dp[r][c] = Math.min(dp[r - 1][c] + triangle[r][c], dp[r - 1][c - 1] + triangle[r][c]);
            } else {
                if (dp[r - 1][c] === undefined) {
                    dp[r][c] = dp[r - 1][c - 1] + triangle[r][c];
                } else {
                    dp[r][c] = dp[r - 1][c] + triangle[r][c];
                }
            }
        }
    }
    return Math.min(...dp[n - 1])
};

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[-8], [3, -6], [5, 7, 1], [-9, 5, 0, -4], [-2, 4, -1, 1, 8]]));
