import type { IList } from "../type/ilist"

export interface IQueue<T> extends IList<T> {
  enqueue(item: T): void
  dequeue(): T | undefined
  clear(): void
}
