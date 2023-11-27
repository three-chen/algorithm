"use strict";
function searchMatrix(matrix, target) {
    const row = matrix.length;
    const column = matrix[0].length;
    // find column
    let left = 0, right = column - 1;
    for (let j = 0; j < row; j++) {
        ;
        (left = 0), (right = column - 1);
        while (left <= right) {
            const base = Math.floor((left + right) / 2);
            if (matrix[j][base] === target) {
                return true;
            }
            else if (matrix[j][base] > target) {
                right = base - 1;
            }
            else {
                left = base + 1;
            }
        }
        if (right < 0) {
            return false;
        }
    }
    return false;
}
console.log(searchMatrix([
    [3, 3, 8, 13, 13, 18],
    [4, 5, 11, 13, 18, 20],
    [9, 9, 14, 15, 23, 23],
    [13, 18, 22, 22, 25, 27],
    [18, 22, 23, 28, 30, 33],
    [21, 25, 28, 30, 35, 35],
    [24, 25, 33, 36, 37, 40]
], 21));
