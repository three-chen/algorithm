function shipWithinDays(weights: number[], days: number): number {
  let max = 0;
  const total = weights.reduce((acu, cur) => {
    max = Math.max(max, cur);
    return acu + cur;
  }, 0);
  let left = max,
    right = total,
    m = 0,
    tempAcu = 0,
    tempDays = 0;
  while (left <= right) {
    tempDays = 0;
    m = Math.floor((left + right) / 2);
    for (let i = 0; i < weights.length; i++) {
      tempAcu += weights[i];
      if (tempAcu > m) {
        tempDays++;
        tempAcu = 0;
        i--;
      }
    }
    if (tempAcu > 0) {
      tempDays++;
      tempAcu = 0;
    }
    if (tempDays > days) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }
  return left;
}
