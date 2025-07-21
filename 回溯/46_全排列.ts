function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  backTrace(nums, nums, [], res);
  return res;
}

function backTrace(
  nums: number[],
  curNums: number[],
  cur: number[],
  res: number[][]
) {
  const l = curNums.length;
  if (l < 1) {
    res.push(Array.from(cur));
    return;
  }
  for (let i = 0; i < curNums.length; i++) {
    const element = curNums[i];
    cur.push(element);
    const newNums = Array.from(curNums);
    newNums.splice(i, 1);
    backTrace(nums, newNums, cur, res);
    cur.pop();
  }
}
