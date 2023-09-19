function lengthOfLongestSubstring(s: string): number {
  const n = s.length

  // 1.定义需要用到的变量
  const map = new Map<string, number>()

  let maxLength = 0
  let left = 0
  for (let right = 0; right < n; right++) {
    const rightChar = s[right]

    // 保留最新的索引之前，判断之前这个字符，是否已经出现过
    if (map.has(rightChar) && map.get(rightChar)! >= left) {
      left = map.get(rightChar)! + 1
    }

    map.set(rightChar, right)

    const currLength = right - left + 1
    maxLength = Math.max(currLength, maxLength)
  }

  return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb"))
