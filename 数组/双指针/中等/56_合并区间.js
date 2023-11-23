"use strict";
function merge(intervals) {
    const l = intervals.length;
    if (l === 1)
        return intervals;
    let left = 0, right = 1;
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let min = intervals[left][0];
    let max = intervals[left][1];
    const res = [];
    while (right < l) {
        if (intervals[right][0] <= max) {
            max = Math.max(max, intervals[right][1]);
        }
        else {
            res.push([min, max]);
            left = right;
            min = intervals[left][0];
            max = intervals[left][1];
        }
        right++;
    }
    res.push([min, max]);
    return res;
}
console.log(merge([
    [5, 5],
    [1, 3],
    [3, 5],
    [4, 6],
    [1, 1],
    [3, 3],
    [5, 6],
    [3, 3],
    [2, 4],
    [0, 0]
]));
