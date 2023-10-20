function deleteAndEarn(nums: number[]): number {
    let a = {}
    for (let i = 0; i < nums.length; i++) {
        if (a[nums[i]]) {
            a[nums[i]] = a[nums[i]] + nums[i]
        } else {
            a[nums[i]] = nums[i]
        }
    }
    let c: number[] = []
    let b: number[] = []
    for (const key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
            c.push(Number(key))
            b.push(a[key]);
        }
    }

    const l = b.length - 1;
    if (l === 0) {
        return b[0]
    }
    if (l === 1) {
        if (c[1] - 1 === c[0]) {
            return Math.max(b[1], b[0])
        } else {
            return b[0] + b[1]
        }
    }
    let dp = [b[0]]
    if (c[1] - 1 === c[0]) {
        dp[1] = Math.max(b[0], b[1])
    } else {
        dp[1] = b[0] + b[1]
    }

    for (let i = 2; i <= l; i++) {
        if (c[i] - 1 === c[i - 1]) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + b[i]);
        } else {

            dp[i] = Math.max(dp[i - 1] + b[i], dp[i - 2] + b[i]);
        }
    }
    return dp[l]
};

console.log(deleteAndEarn([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
