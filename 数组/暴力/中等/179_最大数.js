"use strict";
function largestNumber(nums) {
    nums.sort((a, b) => {
        let x = String(a), y = String(b);
        console.log(x + y, y + x, x + y > y + x);
        if (x + y > y + x) {
            return -1;
        }
        else {
            return 1;
        }
    });
    return nums.join('');
}
console.log(largestNumber([111311, 1113]));
console.log(largestNumber([43243, 432]));
console.log(largestNumber([999999991, 9]));
console.log(largestNumber([9, 999999991]));
