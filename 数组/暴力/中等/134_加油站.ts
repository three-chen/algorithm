function canCompleteCircuit(gas: number[], cost: number[]): number {
  const l = gas.length
  for (let i = 0; i < l; i++) {
    if (cost[i] > gas[i]) {
      continue
    }
    const index = test(gas, cost, i, gas[i], 0)

    if (index > l) {
      return i
    } else if (index < i) {
      break
    } else {
      i = index
    }
  }
  return -1
}

function test(gas: number[], cost: number[], curIndex: number, remainGas: number, deepth: number): number {
  if (deepth > gas.length) {
    return deepth
  }
  const nextIndex = (curIndex + 1) % gas.length
  let nextGas = remainGas - cost[curIndex]
  if (nextGas < 0) {
    return curIndex
  }
  nextGas = nextGas + gas[nextIndex]
  return test(gas, cost, nextIndex, nextGas, deepth + 1)
}

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
