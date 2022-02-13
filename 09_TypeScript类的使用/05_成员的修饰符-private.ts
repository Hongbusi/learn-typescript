class Person {
  private name: string = ''

  getName() {
    return this.name
  }

  setName(newName) {
    this.name = newName
  }
}

const p = new Person()
console.log(p.getName())
p.setName('hbs')
