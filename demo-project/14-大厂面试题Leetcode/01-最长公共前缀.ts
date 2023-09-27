export function longestCommonPrefix(strs: string[]): string {
  const n = strs.length
  if (n <= 0) return ''

  let prefix = strs[0]

  for (let i = 1; i < n; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
    }

    if (prefix.length === 0) {
      return ''
    }
  }

  return prefix
}

// 测试
console.log('公共前缀:', longestCommonPrefix(["flower","flow","flight"]))
console.log('公共前缀:', longestCommonPrefix(["abc","abd","aaa", "axx"]))
console.log('公共前缀:', longestCommonPrefix(["abc","abd","aaa", "tyh"]))
