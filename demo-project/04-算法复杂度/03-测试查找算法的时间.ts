import sequentSearch from './01-查找算法-顺序查找';
import binarySearch from './02-查找算法-二分查找';

import { testOrderSearchEfficiency } from 'hy-algokit';

const MAX_LENGTH = 10000
const nums = new Array(MAX_LENGTH).fill(0).map((_, index) => index)
const num = MAX_LENGTH / 2

const startTime = performance.now()
// const index = sequentSearch(nums, num)
const index = binarySearch(nums, num)
const endTime = performance.now()
console.log(`sequentSearch: ${index} ${endTime - startTime}`)

testOrderSearchEfficiency(sequentSearch)
testOrderSearchEfficiency(binarySearch)

