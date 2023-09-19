/* function twoSum(nums: number[], target: number): number[] {
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] + nums[i] === target) return [i, j]
    }
  }

  return []
}; */

function twoSum(nums: number[], target: number): number[] {
  const numIndexMap: Record<number, number> = {}; // 用于存储数字及其索引的映射

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      // 检查 complement 是否在 numIndexMap 中
      if (numIndexMap.hasOwnProperty(complement)) {
          // 如果找到了 complement，返回两个数的索引
          return [numIndexMap[complement], i];
      }

      // 否则将当前数字及其索引存入映射中
      numIndexMap[nums[i]] = i;
  }

  // 如果没有找到答案，返回一个空数组
  return [];
}

// 示例用法
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // 输出 [0, 1]


console.log(twoSum([3,2,4], 6))
