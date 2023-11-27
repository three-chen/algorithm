"use strict";
function numIslands(grid) {
    const row = grid.length;
    const column = grid[0].length;
    const flag = new Array(row).fill(false).map(() => {
        console.log('true');
        return new Array(column).fill(false);
    });
    let sum = 0;
    console.log(grid);
    console.log(flag);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            console.log(i, j);
            if (grid[i][j] === '1' && flag[i][j] === false) {
                backTrace(grid, flag, i, j);
                sum++;
            }
        }
    }
    return sum;
}
function backTrace(grid, flag, row, column) {
    if (grid[row][column] === '0')
        return;
    if (flag[row][column] === false) {
        flag[row][column] = true;
    }
    if (row - 1 >= 0 && flag[row - 1][column] === false) {
        backTrace(grid, flag, row - 1, column);
    }
    if (row + 1 < grid.length && flag[row + 1][column] === false) {
        backTrace(grid, flag, row + 1, column);
    }
    if (column - 1 >= 0 && flag[row][column - 1] === false) {
        backTrace(grid, flag, row, column - 1);
    }
    if (column + 1 < grid[0].length && flag[row][column + 1] === false) {
        backTrace(grid, flag, row, column + 1);
    }
}
console.log(numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]));
