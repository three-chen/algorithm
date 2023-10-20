function wordBreak(s: string, wordDict: string[]): boolean {
    const l = s.length;
    const dp = new Array(l + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= l; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[l]
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
