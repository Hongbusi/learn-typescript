const info = {
  name: 'hbs',
  eating() {
    console.log(this)
    console.log(this.name + ' eating')
  }
}

info.eating()
