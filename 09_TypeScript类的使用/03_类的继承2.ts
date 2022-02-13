
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('eating')
  }
}

class Student extends Person {
  sno: number = 0

  constructor(name: string, age: number, sno: number) {
    // super 调用父类的构造器
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log('studying')
  }

  eating() {
    super.eating()
    console.log('student eating')
  }
}

const stu = new Student('hbs', 18, 1234)
console.log(stu.name)
console.log(stu.age)
stu.eating()

export {}
