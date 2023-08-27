class HashTable<T = any> {
  // 创建一个数组, 用来存放链地址法中的链(数组)
  private storage: [string, T][][] = []

  // 定义数组的长度
  private length: number = 7

  // 记录已经存放元素的个数
  private count: number = 0

  /**
   * @description: 此函数用于：将 key 6映射成 index。
   * @Author: ZeT1an
   * @param {string} key 转换的 key
   * @param {number} max 数组的长度（最大的数值）
   * @return {number} 索引值
   */
  private hashFunc(key: string, max: number): number {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += 31 * hashCode + key.charCodeAt(i)
    }
    return hashCode % max
  }

  put(key: string, value: T) {
    // 1.根据key获取数组中对应的索引值
    const index = this.hashFunc(key, this.length)

    // 2.取出索引值对应位置的数组(桶)
    let bucket = this.storage[index]

    // 3.判断bucket是否有值
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const [tupleKey] = tuple
      if (tupleKey === key) {
        tuple[1] = value
        isUpdate = true
        break
      }
    }

    if (!isUpdate) {
      bucket.push([key, value])
      this.count++
    }
  }

  get(key: string): T | undefined {
    // 1.根据 key 获取索引值 index
    const index =  this.hashFunc(key, this.length)

    // 2.获取 bucket 桶
    const bucket = this.storage[index]
    if (!bucket) return undefined

    // 对 bucket 进行遍历
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const [tupleKey, tuplevalue] = tuple
      if (tupleKey === key) {
        return tuplevalue
      }
    }

    return undefined
  }

  delete(key: string): T | undefined {
    // 1.获取索引值的位置
    const index = this.hashFunc(key, this.length)

    // 2.获取 bucket 桶
    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const [tupleKey, tuplevalue] = tuple
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--
        return tuplevalue
      }
    }
  }
  
}

export default HashTable

// 测试
const hashTable = new HashTable()
hashTable.put('aaa', 100)
hashTable.put('aaa', 200)
hashTable.put('bbb', 300)
hashTable.put('ccc', 400)

console.log(hashTable.get('aaa'))
console.log(hashTable.get('bbb'))
console.log(hashTable.get('ccc'))

console.log("delete:", hashTable.delete("aaa"))
console.log("get:", hashTable.get("aaa"))
