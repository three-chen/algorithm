"use strict";
function generateParenthesis(n) {
    const res = [];
    backTracing(n, n, res, '');
    return res;
}
function backTracing(left, right, res, conbination) {
    if (left === 0 && right === 0) {
        res.push(conbination);
        return;
    }
    const l = left - 1, r = right - 1;
    if (constraint(l, right))
        backTracing(l, right, res, conbination + '(');
    if (constraint(left, r))
        backTracing(left, r, res, conbination + ')');
}
function constraint(left, right) {
    if (left < 0 || right < 0)
        return false;
    return left <= right;
}
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
