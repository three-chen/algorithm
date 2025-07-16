"use strict";
function lengthOfLongestSubstring(s) {
    const l = s.length;
    if (l === 0)
        return 0;
    const set = new Set();
    let left = 0, right = 0, max = 0;
    while (right < l) {
        const el = set.has(s[right]);
        if (el === true) {
            console.log(set.size, left, right);
            max = Math.max(set.size, max);
            while (s[left] !== s[right]) {
                set.delete(s[left]);
                left++;
            }
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        right++;
    }
    return Math.max(max, set.size);
}
console.log(lengthOfLongestSubstring('aabaab!bb'));
