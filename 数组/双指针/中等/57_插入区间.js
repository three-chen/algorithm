"use strict";
function insert(intervals, newInterval) {
    let min = Infinity, max = -Infinity;
    const l = intervals.length;
    if (l === 0) {
        intervals.push(newInterval);
        return intervals;
    }
    let i = 0;
    let leftIndex = 0, rightIndex = 0;
    for (i = 0; i < l; i++) {
        if (newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) {
            min = intervals[i][0];
            leftIndex = i;
            break;
        }
        else if (newInterval[0] <= intervals[i][0]) {
            min = newInterval[0];
            leftIndex = i;
            break;
        }
    }
    if (leftIndex === 0) {
        leftIndex = i;
        min = newInterval[0];
    }
    for (; i < l; i++) {
        if (newInterval[1] < intervals[i][0]) {
            max = newInterval[1];
            rightIndex = i;
            break;
        }
        else if (newInterval[1] <= intervals[i][1]) {
            max = intervals[i][1];
            rightIndex = i + 1;
            break;
        }
    }
    if (rightIndex === 0) {
        rightIndex = i;
        max = newInterval[1];
    }
    intervals.splice(leftIndex, rightIndex - leftIndex, [min, max]);
    return intervals;
}
console.log(insert([
    [1, 3],
    [6, 9]
], [2, 5]));
console.log(insert([
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16]
], [4, 8]));
console.log(insert([], [4, 8]));
console.log(insert([[1, 5]], [2, 3]));
console.log(insert([[1, 5]], [6, 7]));
