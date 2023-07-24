import type IList from './ilist';

export default interface ILinkedList<T> extends IList<T> {
  append(value: T): void;
  traverse(): void;
  insert(position: number, value: T): boolean;
  removeAt(position: number): T | null
  get(position: number): T | null
  update(position: number, value: T): boolean
  indexOf(value: T): number
  remove(value: T): T | null
}
