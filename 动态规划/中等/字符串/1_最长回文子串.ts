function longestPalindrome(s: string) {
    const l = s.length
    const dp = new Array(l).fill(0).map(() => new Array(l).fill(0))
    let r = s[0]
    let n = 1
    for (let i = 0; i < l; i++) {
        dp[i][i] = 1
    }

    let j = 0
    for (let t = 1; t < l; t++) {
        for (let i = 0; i < l - t; i++) {
            j = i + t
            if (s[i] === s[j]) {
                if (isHuiWen(s.substring(i + 1, j))) {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                } else {
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
                }
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
            if (dp[i][j] > n) {
                n = dp[i][j]
                r = s.substring(i, j + 1)
            }
        }
    }

    return r
};

function isHuiWen(str: string) {
    const l = str.length
    if (l < 2) {
        return true
    }
    for (let i = 0; i < l / 2; i++) {
        if (str[i] !== str[l - i - 1]) {
            return false
        }
    }
    return true
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("aacabdkacaa"));
