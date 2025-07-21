function minHeapify(nums, len, index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let minimum = index;
    if (left < len && nums[left].sum < nums[minimum].sum) {
        minimum = left;
    }
    if (right < len && nums[right].sum < nums[minimum].sum) {
        minimum = right;
    }
    if (minimum !== index) {
        swap(nums, minimum, index);
        minHeapify(nums, len, minimum);
    }
}
function buildMinHeap(nums) {
    const l = nums.length;
    for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
        minHeapify(nums, l, i);
    }
}
function swap(nums, a, b) {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
function kSmallestPairs(nums1, nums2, k) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    const res = [];
    const hasset = new Set(`${0}_${0}`);
    const minHeap = [{ sum: nums1[0] + nums2[0], i: 0, j: 0 }];
    for (let i = 0; i < k; i++) {
        buildMinHeap(minHeap);
        const min = minHeap.shift();
        if (min) {
            res.push([nums1[min.i], nums2[min.j]]);
            if (!hasset.has(`${min.i + 1}_${min.j}`) && min.i + 1 < l1) {
                minHeap.push({
                    sum: nums1[min.i + 1] + nums2[min.j],
                    i: min.i + 1,
                    j: min.j,
                });
                hasset.add(`${min.i + 1}_${min.j}`);
            }
            if (!hasset.has(`${min.i}_${min.j + 1}`) && min.j + 1 < l2) {
                minHeap.push({
                    sum: nums1[min.i] + nums2[min.j + 1],
                    i: min.i,
                    j: min.j + 1,
                });
                hasset.add(`${min.i}_${min.j + 1}`);
            }
        }
    }
    return res;
}
console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 20));
