class Graph<T> {
  // 顶点
  private verteces: T[] = []
  // 边
  private adjListL: Map<T, T[]> = new Map()

  addVertex(vertex: T) {
    // 将顶点添加到数组中保存
    this.verteces.push(vertex)
    // 创建一个邻接表中的数组
    this.adjListL.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjListL.get(v1)?.push(v2)
    this.adjListL.get(v2)?.push(v1)
  }

  printEdge() {
    console.log('Graph:')
    this.verteces.forEach(vertex => {
      const edges = this.adjListL.get(vertex)
      console.log(`${vertex} -> ${edges?.join(' ')}`)
    })
  }
}

// 测试
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addVertex("I")

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.printEdge()

export {}
