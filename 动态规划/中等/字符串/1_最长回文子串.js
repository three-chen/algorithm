function longestPalindrome(s) {
    var l = s.length;
    var dp = new Array(l).fill(0).map(function () { return new Array(l).fill(0); });
    var r = s[0];
    var n = 1;
    for (var i = 0; i < l; i++) {
        dp[i][i] = 1;
    }
    var j = 0;
    for (var t = 1; t < l; t++) {
        for (var i = 0; i < l - t; i++) {
            j = i + t;
            if (s[i] === s[j]) {
                if (isHuiWen(s.substring(i + 1, j))) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
                else {
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
                }
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
            if (dp[i][j] > n) {
                n = dp[i][j];
                r = s.substring(i, j + 1);
            }
        }
    }
    return r;
}
;
function isHuiWen(str) {
    var l = str.length;
    if (l < 2) {
        return true;
    }
    for (var i = 0; i < l / 2; i++) {
        if (str[i] !== str[l - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("aacabdkacaa"));
