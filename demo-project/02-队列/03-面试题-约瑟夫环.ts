import { ArrayQueue } from './01-ArrayQueue';

/**
 * @description: 此函数用于：解决与瑟夫环问题。
 * @Author: ZeT1an
 * @param {number} members 所有成员的编号总数，最小值为 1。
 * @param {number} num 间隔的个数。
 * @return {number} 或者者的编号。
 */
function josephusProblem<T>(members: number, num: number): number {
  const queue = new ArrayQueue<number>();

  for (let i = 1; i <= members; i++) {
    queue.enqueue(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    const index = queue.dequeue();
    console.log(`淘汰成员编号: ${index}`);
  }

  return queue.dequeue()!;
}

// 示例用法
const winner = josephusProblem(5, 3);
console.log(`最后幸存者编号: ${winner}`);
