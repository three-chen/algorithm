function wordBreak(s, wordDict) {
    var l = s.length;
    var dp = new Array(l + 1).fill(false);
    dp[0] = true;
    for (var i = 1; i <= l; i++) {
        for (var j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[l];
}
;
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
