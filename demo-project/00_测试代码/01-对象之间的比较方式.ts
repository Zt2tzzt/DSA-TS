class Person {
  constructor(public name: string, public age: number) {}

  valueOf() {
    return this.age;
  }
}

const p1 = new Person("John", 30);
const p2 = new Person("Jane", 26);
console.log(p1 < p2); // false
console.log(p1 > p2); // true

const p3 = new Person("zzt", 26)
console.log(p3 === p2) // false
console.log(p3 == p2) // false
