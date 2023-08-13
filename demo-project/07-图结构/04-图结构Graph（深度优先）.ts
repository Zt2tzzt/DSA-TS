class Graph<T> {
  // 顶点
  private vertexes: T[] = []
  // 边
  private adjListL: Map<T, T[]> = new Map()

  addVertex(vertex: T) {
    // 将顶点添加到数组中保存
    this.vertexes.push(vertex)
    // 创建一个邻接表中的数组
    this.adjListL.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjListL.get(v1)?.push(v2)
    this.adjListL.get(v2)?.push(v1)
  }

  printEdge() {
    console.log('Graph:')
    this.vertexes.forEach(vertex => {
      const edges = this.adjListL.get(vertex)
      console.log(`${vertex} -> ${edges?.join(' ')}`)
    })
  }

  bfs() {
    // 1.判断是否有顶点
    if (this.vertexes.length === 0) return

    // 2.创建队列结构，访问第一个节点
    const queue: T[] = []
    queue.push(this.vertexes[0])

    // 3.创建 Set 结构，记录某一个顶点是否被访问过
    const visited = new Set<T>()
    visited.add(this.vertexes[0])

    // 4.遍历队列中每一个顶点
    while (queue.length) {
      const vertex = queue.shift()
      console.log(vertex)

      const neighbors = this.adjListL.get(vertex!)
      if (!neighbors) continue // 类型缩小
      neighbors?.forEach(item => {
        if (!visited.has(item)) {
          visited.add(item)
          queue.push(item)
        }
      })
    }
  }

  dfs() {
    // 1.判断有没有顶点，没有直接返回
    if (this.vertexes.length === 0) return

    // 2.创建栈结构
    const stack: T[] = []
    stack.push(this.vertexes[0])

    // 3.创廯 Set
    const visited = new Set<T>()
    visited.add(this.vertexes[0])

    // 4.遍历栈结涟中添加的顶炴�
    while (stack.length) {
      const vertex = stack.pop()
      console.log(vertex)

      const neighbors = this.adjListL.get(vertex!)
      if (!neighbors) continue // 类型缩小
      /* neighbors.forEach(item => {
        if (!visited.has(item)) {
          visited.add(item)
          stack.push(item)
        }
      }) */
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const item = neighbors[i]
        if (!visited.has(item)) {
          visited.add(item)
          stack.push(item)
        }
      }
    }
  }
}

// 测试
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

graph.printEdge()
graph.dfs()

export {}
