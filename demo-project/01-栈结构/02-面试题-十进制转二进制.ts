import { ArrayStack } from './01-ArrayStack';

function dec2bin(dec:number): string {
  const stack = new ArrayStack()

  while (dec > 0) {
    stack.push(dec % 2)
    dec = Math.floor(dec / 2)
  }

  let bin = ''
  while (!stack.isEmpty()) {
    bin += stack.pop()
  }

  return bin
}

console.log(dec2bin(10))
console.log('---')
console.log(dec2bin(100))
