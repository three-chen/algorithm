"use strict";
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board) {
    const row = board.length, column = board[0].length;
    for (let i = 0; i < column - 1; i++) {
        if (board[0][i] === 'O') {
            backTrace(board, row, column, 0, i);
        }
    }
    for (let i = 0; i < row - 1; i++) {
        if (board[i][column - 1] === 'O') {
            backTrace(board, row, column, i, column - 1);
        }
    }
    for (let i = column - 1; i > 0; i--) {
        if (board[row - 1][i] === 'O') {
            backTrace(board, row, column, row - 1, i);
        }
    }
    for (let i = row - 1; i > 0; i--) {
        if (board[i][0] === 'O') {
            backTrace(board, row, column, i, 0);
        }
    }
    console.log(board);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            }
            else {
                board[i][j] = 'X';
            }
        }
    }
}
function backTrace(board, row, column, i, j) {
    if (i < 0 || i >= row || j < 0 || j >= column || board[i][j] !== 'O') {
        return;
    }
    board[i][j] = 'A';
    backTrace(board, row, column, i - 1, j);
    backTrace(board, row, column, i + 1, j);
    backTrace(board, row, column, i, j - 1);
    backTrace(board, row, column, i, j + 1);
}
// solve([
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X']
// ])
solve([['O']]);
