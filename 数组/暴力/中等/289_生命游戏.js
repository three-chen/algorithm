"use strict";
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
    const neibor = [0, 1, -1];
    const row = board.length;
    const column = board[0].length;
    const newB = new Array(row).fill(0).map(() => new Array(column).fill(0));
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            newB[i][j] = board[i][j];
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const num = board[i][j];
            let liveSum = 0;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (!(x === 0 && y === 0)) {
                        const r = i + neibor[x];
                        const c = j + neibor[y];
                        if (r >= 0 && r < row && c >= 0 && c < column) {
                            liveSum += board[r][c];
                        }
                    }
                }
            }
            if (num === 1) {
                if (liveSum < 2) {
                    newB[i][j] = 0;
                }
                else if (liveSum > 3) {
                    newB[i][j] = 0;
                }
                else {
                    newB[i][j] = 1;
                }
            }
            else {
                if (liveSum === 3) {
                    newB[i][j] = 1;
                }
                else {
                    newB[i][j] = 0;
                }
            }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            board[i][j] = newB[i][j];
        }
    }
}
const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];
console.log(gameOfLife(board));
console.log(board);
