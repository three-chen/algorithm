"use strict";
var oprator;
(function (oprator) {
    oprator["add"] = "+";
    oprator["sub"] = "-";
    oprator["mul"] = "*";
    oprator["div"] = "/";
})(oprator || (oprator = {}));
function evalRPN(tokens) {
    const stack = [];
    stack.push(Number(tokens.shift()), Number(tokens.shift()));
    while (tokens.length > 0) {
        const el = tokens.shift();
        switch (el) {
            case oprator.add:
                {
                    const b = Number(stack.pop());
                    const a = Number(stack.pop());
                    stack.push(a + b);
                }
                break;
            case oprator.sub:
                {
                    const b = Number(stack.pop());
                    const a = Number(stack.pop());
                    stack.push(a - b);
                }
                break;
            case oprator.mul:
                {
                    const b = Number(stack.pop());
                    const a = Number(stack.pop());
                    stack.push(a * b);
                }
                break;
            case oprator.div:
                {
                    const b = Number(stack.pop());
                    const a = Number(stack.pop());
                    stack.push(Math.trunc(a / b));
                }
                break;
            default:
                stack.push(Number(el));
                break;
        }
    }
    return stack[0];
}
// console.log(evalRPN(['2', '1', '+', '3', '*']))
// console.log(evalRPN(['4', '13', '5', '/', '+']))
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
