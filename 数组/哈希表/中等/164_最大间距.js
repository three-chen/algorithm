"use strict";
function maximumGap(nums) {
    if (nums.length < 2)
        return 0;
    const mymap = {};
    nums.forEach(value => {
        mymap[value] = value;
    });
    console.log(mymap);
    let maxGap = 0, lastValue = Infinity;
    for (const key in mymap) {
        const value = mymap[key];
        console.log(value, lastValue);
        if (value - lastValue > maxGap) {
            maxGap = value - lastValue;
        }
        lastValue = value;
    }
    return maxGap;
}
console.log(maximumGap([100, 3, 2, 1]));
