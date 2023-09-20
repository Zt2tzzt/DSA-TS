function longestPalindrome(s: string): string {
  const n = s.length

  if (n <= 1) return s

  let start = 0, end = 0
  for (let i = 0; i < n; i++) {
    const len1 = centerExpand(s, i, i)
    const len2 = centerExpand(s, i, i + 1)
    const maxLen = Math.max(len1, len2)

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2)
      end = i + Math.floor(maxLen / 2)
    }
  }

  return s.substring(start, end + 1)
};

function centerExpand(s: string, left: number, right: number): number {
  const n = s.length

  while (left >= 0 && right < n && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}

// 测试
console.log(longestPalindrome("cbbd"))
