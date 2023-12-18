function kthLargestNumber(nums: string[], k: number): string {
  buildMaxHeap(nums)
  console.log(nums)

  const l = nums.length
  let res = ''
  for (let i = 0; i < k; i++) {
    if (i === k - 1) {
      res = String(nums[0])
      break
    }
    swap(nums, l - i - 1, 0)
    maxHeapify(nums, l - i - 1, 0)
  }
  return res
}

function buildMaxHeap(nums: string[]) {
  const l = nums.length
  for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
    maxHeapify(nums, l, i)
  }
}

function maxHeapify(nums: string[], len: number, index: number) {
  const left = 2 * index + 1
  const right = 2 * index + 2
  let max = index
  if (left < len && leftNumStrBigger(nums[left], nums[max])) {
    max = left
  }
  if (right < len && leftNumStrBigger(nums[right], nums[max])) {
    max = right
  }
  if (max !== index) {
    swap(nums, max, index)
    maxHeapify(nums, len, max)
  }
}

function swap(nums: string[], index1: number, index2: number) {
  const temp = nums[index1]
  nums[index1] = nums[index2]
  nums[index2] = temp
}

function leftNumStrBigger(left: string, right: string): boolean {
  let flag = false
  if (left.length > right.length) {
    flag = true
  } else if (left.length < right.length) {
    flag = false
  } else {
    const l = left.length
    for (let i = 0; i < l; i++) {
      if (left[i] > right[i]) {
        flag = true
        break
      } else if (left[i] < right[i]) {
        flag = false
        break
      }
    }
  }
  return flag
}

console.log(
  kthLargestNumber(
    [
      '683339452288515879',
      '7846081062003424420',
      '4805719838',
      '4840666580043',
      '83598933472122816064',
      '522940572025909479',
      '615832818268861533',
      '65439878015',
      '499305616484085',
      '97704358112880133',
      '23861207501102',
      '919346676',
      '60618091901581',
      '5914766072',
      '426842450882100996',
      '914353682223943129',
      '97',
      '241413975523149135',
      '8594929955620533',
      '55257775478129',
      '528',
      '5110809',
      '7930848872563942788',
      '758',
      '4',
      '38272299275037314530',
      '9567700',
      '28449892665',
      '2846386557790827231',
      '53222591365177739',
      '703029',
      '3280920242869904137',
      '87236929298425799136',
      '3103886291279'
    ],
    3
  )
)
