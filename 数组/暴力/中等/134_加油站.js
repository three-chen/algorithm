"use strict";
function canCompleteCircuit(gas, cost) {
    const l = gas.length;
    for (let i = 0; i < l; i++) {
        if (cost[i] > gas[i]) {
            continue;
        }
        const index = test(gas, cost, i, gas[i], 0);
        console.log(index);
        // if (index > l) {
        //   return i
        // } else {
        //   i = index
        // }
    }
    return -1;
}
function test(gas, cost, curIndex, remainGas, deepth) {
    if (deepth > gas.length) {
        return deepth;
    }
    console.log(curIndex, remainGas, deepth);
    const nextIndex = (curIndex + 1) % gas.length;
    let nextGas = remainGas - cost[curIndex];
    if (nextGas < 0) {
        return curIndex;
    }
    nextGas = nextGas + gas[nextIndex];
    return test(gas, cost, nextIndex, nextGas, deepth + 1);
}
// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
