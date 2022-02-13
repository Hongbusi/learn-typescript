type ThisType = { name: string }

function eating(this: ThisType) {
  console.log(this.name + ' eating')
}

const info = {
  name: 'hbs',
  eating
}

info.eating()

eating.call({ name: 'hbs' })

export {}
