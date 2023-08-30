type SorlAlgoFn = (arr: number[]) => number[]

export const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

export const isSorted = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}

export const testSort = (sortFn: SorlAlgoFn) => {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  console.log('排序前的素组：', arr)
  
  const newArr = sortFn(arr)
  console.log('排序后的素组：', newArr)
  console.log('排序后的素组是否有序：', isSorted(newArr))
}
