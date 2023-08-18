class Person {
  constructor(public name: string, public age: number) {}

  valueOf() {
    return this.age;
  }
}

const p1 = new Person("John", 30);
const p2 = new Person("Jane", 26);
console.log(p1 <= p2); // false
console.log(p1 >= p2); // true

const p3 = new Person("zzt", 26)
console.log(p3 === p2) // false
console.log(p3 == p2) // false

class CustomNumber {
  constructor(private value: number) {}

  equals(other: CustomNumber): boolean {
    return this.value === other.value;
  }
}

const num1 = new CustomNumber(5);
const num2 = new CustomNumber(5);

console.log(num1.equals(num2));  // 输出: true
console.log(num1 == num2)
