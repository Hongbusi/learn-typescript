// 通过类型（type）别名声明对象类型
// type InfoType = {
//   name: string,
//   age: number
// }

// 另外一种方式声明对象类型：接口 interface
interface IInfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: 'hbs',
  age: 18
}

// info.name = 'hbs'

console.log(info.friend?.name)

