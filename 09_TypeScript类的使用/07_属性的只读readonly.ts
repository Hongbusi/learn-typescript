class Person {
  // 1. 只读属性是可以在构造器中赋值，赋值之后就不可以修改
  // 2. 属性本身不可以修改，但是如果它是对象类型，对象中的属性是可以修改
  readonly name: string
  readonly friend?: Person

  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('hbs', new Person('test'))

console.log(p.name)
console.log(p.friend)

// 不可以直接修改
// p.friend = new Person('test')
// p.friend?.name = 'test'
// p.name = 'hbs'
