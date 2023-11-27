"use strict";
function containsNearbyDuplicate(nums, k) {
    const l = nums.length;
    const map = new Map(); //number,index
    for (let i = 0; i <= k && i < l; i++) {
        if (map.get(nums[i]) !== undefined) {
            return true;
        }
        map.set(nums[i], i);
    }
    map.delete(nums[0]);
    for (let i = k + 1; i < l; i++) {
        if (map.get(nums[i]) !== undefined) {
            return true;
        }
        map.set(nums[i], i);
        map.delete(nums[i - k]);
    }
    return false;
}
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
