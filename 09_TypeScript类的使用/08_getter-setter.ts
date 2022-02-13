class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 访问器 setter / getter
  // setter
  set name(newName) {
    this._name = newName
  }

  // getter
  get name() {
    return this._name
  }
}


const p = new Person('hbs')
p.name = 'test'
console.log(p.name)
