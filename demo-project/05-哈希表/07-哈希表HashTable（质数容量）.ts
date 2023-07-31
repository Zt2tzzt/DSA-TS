class HashTable<T = any> {
  // 创建一个数组, 用来存放链地址法中的链(数组)
  storage: [string, T][][] = []

  // 定义数组的长度
  private limit: number = 7

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

  private isPrime(num: number): boolean { 
    const sqrt = Math.sqrt(num);
    for (let i = 2; i < sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  private getNextPrime(num: number): number {
    let nexPrime = num
    while(!this.isPrime(nexPrime)) {
      nexPrime++
    }
    console.log('nexPrime:', nexPrime)
    return nexPrime
  }

  private resize(newLength: number) {
    // 设置新的长度
    let newPrime = this.getNextPrime(newLength)
    if (newPrime < 7) newPrime = 7
    this.limit = newPrime

    // 获取原来所有的数据，并且重新放入到新的数组中
    // 1.对数据进行初始化操作
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    // 2.将原来的数据，放入到新数组中。
    oldStorage.forEach(bucket => {
      if (bucket) {
        bucket.forEach(tuple => {
          this.put(tuple[0], tuple[1])
        })
      }
    })
  }
  

  put(key: string, value: T) {
    // 1.根据key获取数组中对应的索引值
    const index = this.hashFunc(key, this.limit)

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

      // loadFactor ? 0.75，那么在该位置进行添加
      const loadFactor = this.count / this.limit
      if (loadFactor > 0.75) {
        this.resize(this.limit * 2)
        console.log("扩宽数组，this.limit:", this.limit)
      }
    }
  }

  get(key: string): T | undefined {
    // 1.根据 key 获取索引值 index
    const index =  this.hashFunc(key, this.limit)

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
    const index = this.hashFunc(key, this.limit)

    // 2.获取 bucket 桶
    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const [tupleKey, tuplevalue] = tuple
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--

        // 如果 loaderFactor 小于 0.25，增容操作
        const loadFactor = this.count / this.limit
        if (loadFactor < 0.25 && this.limit > 7) {
          this.resize(Math.floor(this.limit / 2))
          console.log("简化数组，this.limit:", this.limit)
        }
        return tuplevalue
      }
    }

    return undefined
  }
  
}

export default HashTable

// 测试
const hashTable = new HashTable()
// length: 7
// count: 8
// loadFactor: 8 / 7 = 1.1xxxxx
hashTable.put("aaa", 100)
hashTable.put("aaa", 200)
hashTable.put("bbb", 300)
hashTable.put("ccc", 400)
hashTable.put("abc", 111)
hashTable.put("cba", 222)

console.log(hashTable.storage)

hashTable.put("nba", 333)
hashTable.put("mba", 444)
console.log(hashTable.storage)

// 如果loadFactor > 0.75进行扩容操作

hashTable.delete("nba")
hashTable.delete("mba")
hashTable.delete("abc")
hashTable.delete("cba")
hashTable.delete("aaa")
console.log(hashTable.storage)
