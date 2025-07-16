"use strict";
function equalSubstring(s, t, maxCost) {
    const l = s.length;
    const dif = new Array(l).fill(0);
    for (let i = 0; i < l; i++) {
        dif[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    console.log(dif);
    let max = 0, left = 0, right = 0, count = dif[0];
    while (right < l) {
        while (count <= maxCost) {
            right++;
            count += dif[right];
        }
        max = Math.max(max, right - left);
        count -= dif[left];
        left++;
    }
    return max;
}
console.log(equalSubstring('krrgw', 'zjxss', 19));
