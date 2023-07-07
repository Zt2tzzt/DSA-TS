import { ArrayQueue } from './01-ArrayQueue';

function hotPotato(players: string[], num: number): number {
  if (players.length === 0) return -1

  // 1.创建队列
  const queue = new ArrayQueue<string>()

  // 2.所有玩家入队
  players.forEach(item => {
    queue.enqueue(item)
  })

  while (queue.size() > 1) {
    // 1、2 不淘汰
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    // 3 淘汰
    queue.dequeue()
  }

  // 返回获胜者的索引
  return players.indexOf(queue.dequeue()!)
}

console.log(hotPotato(['zzt', 'messi', 'ronaldo', 'krose', 'kevin'], 3))
