function longestPalindromeSubseq(s) {
    var l = s.length;
    var dp = new Array(l).fill(0).map(function () { return new Array(l).fill(0); });
    for (var i = 0; i < l; i++) {
        dp[i][i] = 1;
    }
    var j = 0;
    for (var f = 1; f < l; f++) {
        for (var i = 0; i <= l - 1 - f; i++) {
            j = i + f;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }
    return dp[0][l - 1];
}
;
console.log(longestPalindromeSubseq("bbbab"));
console.log(longestPalindromeSubseq("cbbd"));
