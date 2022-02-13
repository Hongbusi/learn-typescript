interface IPerson {
  name: string,
  age: number,
  height: number
}

const info = {
  name: 'hbs',
  age: 18,
  height: 1.88,
  address: 'xxx'
}

// freshness 擦除
const p: IPerson = info

console.log(info)
console.log(p)
