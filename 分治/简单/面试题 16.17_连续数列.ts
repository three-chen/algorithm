type State = {
  lSum: number
  rSum: number
  mSum: number
  totalSum: number
}

function maxSubArray(nums: number[]): number {
  return get(nums, 0, nums.length - 1).mSum
}

function get(nums: number[], start: number, end: number): State {
  if (start === end) {
    return {
      lSum: nums[start],
      rSum: nums[start],
      mSum: nums[start],
      totalSum: nums[start]
    }
  }
  const middle = Math.floor((start + end) / 2)

  const leftState = get(nums, start, middle)
  const rightState = get(nums, middle + 1, end)
  return merge(leftState, rightState)
}

function merge(leftState: State, rightState: State): State {
  const state: State = {
    lSum: 0,
    rSum: 0,
    mSum: 0,
    totalSum: 0
  }
  state.totalSum = leftState.totalSum + rightState.totalSum
  state.lSum = Math.max(leftState.lSum, leftState.totalSum + rightState.lSum)
  state.rSum = Math.max(rightState.rSum, rightState.totalSum + leftState.rSum)
  state.mSum = Math.max(leftState.mSum, rightState.mSum, leftState.rSum + rightState.lSum)
  return state
}
