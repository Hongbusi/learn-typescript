// protected：在类内部和子类中可以访问
class Person {
  protected name: string = ''
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const p = new Person()

export {}
